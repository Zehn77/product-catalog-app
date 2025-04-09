import { Metadata } from "next";
import Basket from "./Basket";

export const metadata: Metadata = {
  title: "Shopping Basket - Your Cart",
  description:
    "Manage your shopping basket, view products you’ve added, and proceed to checkout. Easily remove or update items in your cart.",
  keywords: [
    "shopping basket",
    "cart",
    "online shopping",
    "ecommerce",
    "product basket",
    "checkout",
    "shopping cart",
  ],
};

export default function Page() {
  return <Basket />;
}
