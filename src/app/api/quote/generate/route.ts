import { NextRequest, NextResponse } from "next/server";

const TQB_API_BASE = "https://travelquotebot.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${TQB_API_BASE}/api/itinerary/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { success: false, error: errorData.error || `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("TravelQuoteBot API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to connect to quote service" },
      { status: 500 }
    );
  }
}
