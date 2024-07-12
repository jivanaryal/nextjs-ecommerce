import RatingStars from "@/components/shared-component/rating-stars";
import { TProduct } from "@/types/product";
import React from "react";

type Props = {
  product: Pick<TProduct, "reviews">;
};

const ProductReviews = ({ product }: Props) => {
  return (
    <section className="mt-12">
      <h3 className="font-medium text-2xl mb-5 bg-gray-200 py-1 pl-2 ">
        What customers says about us
      </h3>
      {product.reviews?.length > 0 ? (
        <ReviewList product={product} />
      ) : (
        <p className="text-center bg-muted">
          There are no reviews for this product
        </p>
      )}
    </section>
  );
};

function ReviewList({
  product: { reviews },
}: {
  product: Pick<TProduct, "reviews">;
}) {
  return (
    <div>
      {reviews.map((review, index) => {
        return (
          <section key={index}>
            <h4>{review.username}</h4>
            <RatingStars rating={review.rating} />
            <h5 className="my-2">{review.message}</h5>
            <hr className="my-4 shadow-lg" />
          </section>
        );
      })}
    </div>
  );
}

export default ProductReviews;
