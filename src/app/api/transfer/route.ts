import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, TransferBooking } from "@/types/database";

// Validation helper
function validateTransferData(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
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

  if (!data.pickupLocation || typeof data.pickupLocation !== "string") {
    errors.push("Pickup location is required");
  }

  if (!data.dropoffLocation || typeof data.dropoffLocation !== "string") {
    errors.push("Drop-off location is required");
  }

  if (!data.date || typeof data.date !== "string") {
    errors.push("Date is required");
  }

  if (!data.time || typeof data.time !== "string") {
    errors.push("Time is required");
  }

  if (!data.passengers || typeof data.passengers !== "number" || data.passengers < 1) {
    errors.push("Number of passengers is required");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<TransferBooking>>> {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateTransferData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Get metadata from request
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Create booking
    const booking = await db.createTransferBooking({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      transferType: body.transferType || "airport",
      pickupLocation: body.pickupLocation,
      dropoffLocation: body.dropoffLocation,
      date: body.date,
      time: body.time,
      passengers: body.passengers,
      vehicleType: body.vehicleType || "standard",
      flightNumber: body.flightNumber?.trim() || undefined,
      additionalRequests: body.additionalRequests?.trim() || undefined,
      status: "pending",
      ipAddress,
      language: body.language || "en",
    });

    return NextResponse.json(
      {
        success: true,
        data: booking,
        message: "Your transfer booking has been submitted. We will confirm within 1 hour!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Transfer booking error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit booking. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<TransferBooking[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;

    const bookings = await db.getTransferBookings({ status, limit });

    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    console.error("[API] Get transfers error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
