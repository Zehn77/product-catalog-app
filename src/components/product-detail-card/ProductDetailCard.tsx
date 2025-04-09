"use client";
import Image from "next/image";
import { Product } from "@/lib/definitions";
import styles from "./ProductDetailCard.module.css";
import { useBasket } from "@/context/BasketContext";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";

export default function ProductDetailCard({ product }: { product: Product }) {
  const { basket, addToBasket } = useBasket();

  const isProductAlreadyExist = basket.some((item) => item.id === product.id);

  const handleAdd = () => {
    const result = { ...product, quantity: 1 };
    addToBasket(result);
  };

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productImageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className={styles.productImage}
          priority
          layout="intrinsic"
        />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {!isProductAlreadyExist && (
          <button className={styles.button} onClick={handleAdd}>
            Add to Basket <SlBasket />
          </button>
        )}

        <div className="link_container">
          {isProductAlreadyExist && (
            <Link href="/basket" className={styles.linkToBasket}>
              Go to the Basket!
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
