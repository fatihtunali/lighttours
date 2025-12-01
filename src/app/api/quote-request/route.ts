import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, QuoteSubmission } from "@/types/database";

// Validation helper
function validateQuoteData(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullName || typeof data.fullName !== "string" || data.fullName.trim().length < 2) {
    errors.push("Full name is required");
  }

  if (!data.email || typeof data.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.phone || typeof data.phone !== "string") {
    errors.push("Phone number is required");
  }

  if (!data.serviceType || typeof data.serviceType !== "string") {
    errors.push("Service type is required");
  }

  if (!data.travelers || typeof data.travelers !== "number" || data.travelers < 1) {
    errors.push("Number of travelers is required");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<QuoteSubmission>>> {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateQuoteData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Get metadata from request
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const userAgent = request.headers.get("user-agent") || undefined;

    // Create submission
    const submission = await db.createQuoteSubmission({
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      serviceType: body.serviceType,
      startDate: body.startDate || undefined,
      duration: body.duration || undefined,
      travelers: body.travelers,
      budgetLevel: body.budgetLevel || undefined,
      destinations: body.destinations || undefined,
      interests: body.interests || undefined,
      additionalInfo: body.additionalInfo?.trim() || undefined,
      generatedQuote: body.generatedQuote || undefined,
      status: "pending",
      ipAddress,
      userAgent,
      language: body.language || "en",
    });

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to customer

    return NextResponse.json(
      {
        success: true,
        data: submission,
        message: "Your quote request has been submitted successfully. We will contact you within 2 hours!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Quote form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit quote request. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint for admin dashboard (future use)
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<QuoteSubmission[]>>> {
  try {
    // TODO: Add authentication check for admin access

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;

    const submissions = await db.getQuoteSubmissions({ status, limit });

    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error("[API] Get quotes error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
