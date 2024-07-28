import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.category.findMany();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const newCategory = await prisma.category.create({
    data: {
      name: data?.name,
      ImageUrl: data?.ImageUrl,
    },
  });

  return NextResponse.json({
    data: newCategory,
    message: "the category is added successfully",
  });
}
