import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    userId: string;
  };
};

export async function GET(req: NextRequest, { params }: Props) {
  const id = +params.userId;
  if (isNaN(id)) {
    return new NextResponse("please provide an integer value", { status: 400 });
  }
  const foundUser = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  if (!foundUser) return new NextResponse("User not found", { status: 404 });

  return NextResponse.json({
    data: foundUser,
  });
}
