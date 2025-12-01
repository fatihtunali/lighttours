import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, CarRentalInquiry } from "@/types/database";

// Validation helper
function validateCarRentalData(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name is required");
  }

  if (!data.email || typeof data.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.phone || typeof data.phone !== "string") {
    errors.push("Phone number is required");
  }

  if (!data.vehicleType || typeof data.vehicleType !== "string") {
    errors.push("Vehicle type is required");
  }

  if (!data.pickupLocation || typeof data.pickupLocation !== "string") {
    errors.push("Pickup location is required");
  }

  if (!data.pickupDate || typeof data.pickupDate !== "string") {
    errors.push("Pickup date is required");
  }

  if (!data.returnDate || typeof data.returnDate !== "string") {
    errors.push("Return date is required");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<CarRentalInquiry>>> {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateCarRentalData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Get metadata from request
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Create inquiry
    const inquiry = await db.createCarRentalInquiry({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      vehicleType: body.vehicleType,
      pickupLocation: body.pickupLocation,
      dropoffLocation: body.dropoffLocation || body.pickupLocation,
      pickupDate: body.pickupDate,
      returnDate: body.returnDate,
      additionalRequests: body.additionalRequests?.trim() || undefined,
      status: "pending",
      ipAddress,
      language: body.language || "en",
    });

    return NextResponse.json(
      {
        success: true,
        data: inquiry,
        message: "Your car rental inquiry has been submitted. We will contact you shortly!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Car rental error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<CarRentalInquiry[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;

    const inquiries = await db.getCarRentalInquiries({ status, limit });

    return NextResponse.json({ success: true, data: inquiries });
  } catch (error) {
    console.error("[API] Get car rentals error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
