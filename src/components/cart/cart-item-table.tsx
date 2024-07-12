import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import CartItemData from "@/data/cart-items.json";
import { TcartItem } from "@/types/cart-item";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";

type Props = {};

const CartItemTable = (props: Props) => {
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sub Total</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CartItemData.map((cartItem, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div>
                    <Image
                      src={cartItem.product.images[0]}
                      alt={cartItem.product.name}
                      width={100}
                      height={100}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  {getDiscountedPrice(
                    cartItem.product.price,
                    cartItem.product.discount
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartItemTable;
