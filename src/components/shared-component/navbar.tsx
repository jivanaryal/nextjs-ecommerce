"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { signIn, signOut } from "next-auth/react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex bg-[#F85606] text-white  items-center justify-around h-16 border-b-[1px]  shadow font-sans ">
      <section className="text-2xl ">logo</section>
      <ul className="flex gap-5 text-lg">
        <li className="hover:text-gray-300  ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href={"/products"}>Products</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>

      <section>
        <Input
          type="text"
          placeholder="Search products here "
          className=" min-w-[300px] py-2 px-3 border-2 rounded-lg text-black outline-none"
        />
      </section>
      <section className="space-x-3 flex items-center text-base">
        <Button variant={"outline"} className="bg-transparent">
          Login
        </Button>
        <Button variant={"outline"} className="bg-transparent" asChild>
          <Link href={"/auth/signup"}>
            {" "}
            <div>Signup</div>{" "}
          </Link>
        </Button>
        <Button
          variant={"outline"}
          className="bg-transparent"
          onClick={() => signOut()}
        >
          signout
        </Button>
        <Button
          variant={"outline"}
          className="bg-transparent"
          size={"icon"}
          asChild
        >
          <Link href={"/customer/cart"}>
            <FaShoppingCart size={24} />
          </Link>
        </Button>
      </section>
    </nav>
  );
}
