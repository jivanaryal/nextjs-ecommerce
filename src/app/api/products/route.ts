import prisma from "@/lib/prisma";
import { TProduct } from "@/types/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const data: TProduct = await req.json();

  const newProduct = await prisma.product.create({
    data: {
      name: data?.name,
      description: data?.description,
      price: data?.price,
      category: {
        connectOrCreate: {
          where: {
            name: data?.category.name,
          },
          create: {
            name: data.category.name,
            ImageUrl: data.category.ImageUrl,
          },
        },
      },
      stockQuantity: data?.stockQuantity,
      discount: data?.discount,
      images: data?.images,
      avgRating: data?.avgRating,
      reviews: {
        create: data?.reviews.map(
          (review: { username: string; rating: number; message: string }) => ({
            username: review.username,
            rating: review.rating,
            message: review.message,
          })
        ),
      },
    },
  });

  return NextResponse.json(newProduct);
}
