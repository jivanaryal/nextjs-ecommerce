import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.student.findMany();
  return NextResponse.json({ data, message: "the data fetched sucessfully" });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const newStudent = await prisma.student.create({
    data: {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    },
  });

  return NextResponse.json({
    data: newStudent,
    message: "student created sucessfully",
  });
}
