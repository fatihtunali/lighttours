import { NextRequest, NextResponse } from "next/server";

const TQB_API_BASE = "https://travelquotebot.com";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await fetch(`${TQB_API_BASE}/api/itinerary/${id}`);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Itinerary not found" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch itinerary:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch itinerary" },
      { status: 500 }
    );
  }
}
