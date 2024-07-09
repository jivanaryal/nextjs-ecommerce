"use client";

import CategorisWrapper from "@/components/home-page/categories-wrapper";
// import Navbar from "@/components/shared-component/navbar";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import HeroBag from "@/images/hero-bag.jpg";
import HeroHand from "@/images/hero-hand-bag.png";
import HeroSir from "@/images/main-bag.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const myArray = [
    {
      imageUrl: HeroBag,
    },
    {
      imageUrl: HeroSir,
    },
    {
      imageUrl: HeroHand,
    },
    {
      imageUrl: HeroBag,
    },
    {
      imageUrl: HeroSir,
    },
    {
      imageUrl: HeroHand,
    },
    {
      imageUrl: HeroBag,
    },
    {
      imageUrl: HeroSir,
    },
    {
      imageUrl: HeroHand,
    },
  ];

  return (
    <div className="mt-32 ">
      <div className=" w-full flex justify-center">
        <Carousel className="w-full max-w-4xl">
          <CarouselContent className="-ml-1">
            {myArray.map((items, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        <Image src={items.imageUrl} alt="hello" />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <CategorisWrapper />
    </div>
  );
}
