import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProduct } from "@/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: TProduct;
};

export default function SingleProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={product.images[0]}
          alt={product.name}
          height={200}
          width={100}
        />
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{product.price}</p>
        <p>{product.price}</p>
        <span>{product.discount}</span>
      </CardContent>
    </Card>
  );
}
