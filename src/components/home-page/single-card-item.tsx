import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Category } from "@/types/category";

type Props = {
  category: Category;
};

export default function SingleCategoryItem({ category }: Props) {
  console.log(category.ImageUrl);
  return (
    <Card>
      <CardHeader>
        <Image
          src={category.ImageUrl}
          alt="category image"
          height={100}
          width={100}
          className="w-full max-h-[100px] rounded-md object-cover"
        />
      </CardHeader>

      <CardContent>
        <h3 className="text-center">{category.name}</h3>
      </CardContent>
    </Card>
  );
}
