import { TProduct } from "./product";

export type TcartItem = {
  id: number;
  quantity: number;
  product: TProduct;
  totalPrice: number;
  createAt: string;
};
