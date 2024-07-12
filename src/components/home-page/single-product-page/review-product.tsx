import React from "react";
import { TReview } from "@/types/review";
import RatingStars from "@/components/shared-component/rating-stars";
import Image from "next/image";

type Props = {
  review: TReview;
  images: string[];
};

const ReviewProduct = ({ review, images }: Props) => {
  return (
    <div className="review-product p-4 bg-white rounded-md shadow-md mb-4">
      <div className="flex items-center mb-2">
        <RatingStars rating={review.rating} />
        <h4 className="ml-2 text-lg font-semibold">{review.username}</h4>
      </div>
      <p className="text-gray-700 mb-2">{review.message}</p>
      <p className="text-sm text-gray-500">
        Rating: {review.rating.toFixed(1)}
      </p>
      <div className="flex gap-2 mt-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="w-24 h-24 relative">
            <Image
              src={imageUrl}
              alt={`Review image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewProduct;
