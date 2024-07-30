import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.student.findUnique({
    where: { email: email },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = true;

  if (isMatch) {
    return NextResponse.json({ email: user.email }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
