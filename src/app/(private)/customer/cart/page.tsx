import CartItemTable from "@/components/cart/cart-item-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div>
      <main className=" container ">
        <header className="flex items-center justify-center flex-col gap-1">
          <h2 className="text-3xl font-medium">Cart</h2>
          <p className="text-muted-foreground">A list of your cart items</p>
        </header>
        <section className="grid grid-cols-3 gap-10">
          <section className="col-span-2">
            <CartItemTable />
          </section>
          <section className="col-span-1">
            <OrderSumamry />
          </section>
        </section>
      </main>
    </div>
  );
};

function OrderSumamry() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>

        <CardContent className="space-y-3">
          <section className="flex justify-between">
            <h4>Sub Total</h4>
            <span>Rs 500</span>
          </section>
          <section className="flex justify-between">
            <h4>Delivery Fee</h4>
            <span>Rs 110</span>
          </section>
          <section className="flex justify-between">
            <h4>Delivery Fee</h4>
            <span>Rs 110</span>
          </section>
          <section>
            <Button>Proceed to checkout</Button>
          </section>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default CartPage;
