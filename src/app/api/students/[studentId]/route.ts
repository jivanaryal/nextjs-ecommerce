import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    studentId: string;
  };
};

export async function GET(req: NextRequest, { params }: Props) {
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

export async function DELETE(req: NextRequest, { params }: Props) {
  const id = +params.studentId;

  if (isNaN(id)) {
    return new NextResponse("please provide the integer value", {
      status: 400,
    });
  }

  const deleteUser = await prisma.student.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    data: deleteUser,
    message: `the student which id is ${id} is deleted`,
  });
}

export async function PATCH(req: NextRequest, { params }: Props) {
  const data = await req.json();
  const id = +params.studentId;

  if (isNaN(id))
    return new NextResponse("please provide integer value", { status: 400 });

  const updatedData = await prisma.student.update({
    data: data,
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    data: updatedData,
    message: "the data is updated sucessfully",
  });
}
