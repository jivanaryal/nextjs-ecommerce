import prisma from "@/lib/prisma";
import { User } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const newUser = await prisma.user.create({
    data: {
      email: data?.email,
      name: data?.name,
    },
  });
  return NextResponse.json({
    data: newUser,
    message: "user created sucessfully",
  });
}
