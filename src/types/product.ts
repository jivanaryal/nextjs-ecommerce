import { Category } from "./category";
import { TReview } from "./review";

export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  stockQuantity: number;
  discount: number;
  images: string[];
  reviews: TReview[];
};
