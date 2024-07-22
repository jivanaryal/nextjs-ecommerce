import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      studentId: string;
    };
  }
) {
  const id = +params.studentId;
  if (isNaN(id)) {
    return new NextResponse("please provide the integer value", {
      status: 400,
    });
  }

  const userFound = await prisma.student.findFirst({
    where: {
      id: id,
    },
  });

  if (!userFound) {
    return new NextResponse("student doesn't found", { status: 404 });
  }

  return NextResponse.json({ data: userFound });
}
