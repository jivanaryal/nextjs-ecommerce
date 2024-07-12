"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  stockQuantity: number;
};

export const SELECTED_QUANITTY = "quantity";

const QauntityInput = ({ stockQuantity }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const quantity = Number(searchParams.get(SELECTED_QUANITTY) ?? 1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleQuantityUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(stockQuantity, Number(e.target.value)));
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANITTY, value.toString())
    );
  };

  const handleMinusClick = () => {
    const newValue = Math.max(1, quantity - 1);
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANITTY, newValue.toString())
    );
  };

  const handlePlusClick = () => {
    const newValue = Math.min(stockQuantity, quantity + 1);
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANITTY, newValue.toString())
    );
  };

  return (
    <div>
      <section>
        <p className="py-4">Quantity</p>
        <div>
          <Button
            variant={"outline"}
            size={"icon"}
            className={`${quantity >= stockQuantity && "cursor-not-allowed"}`}
            onClick={handlePlusClick}
          >
            <FaPlus />
          </Button>

          <input
            type="number"
            min={1}
            max={stockQuantity}
            className="focus:outline-none w-12 text-black text-center"
            value={quantity}
            onChange={handleQuantityUpdate}
          />

          <Button
            variant={"outline"}
            size={"icon"}
            className={`${quantity <= 1 && "cursor-not-allowed"}`}
            onClick={handleMinusClick}
          >
            <FaMinus />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default QauntityInput;
