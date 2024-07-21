import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json("student quality circle");
}

export async function POST(req: NextRequest) {}
