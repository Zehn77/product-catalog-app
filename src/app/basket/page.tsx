"use client";

import styles from "./page.module.css";

import Image from "next/image";
import { useBasket } from "@/context/BasketContext";
import { useRouter } from "next/navigation"; // For App Directory

export default function Basket() {
  const { basket, removeFromBasket } = useBasket();
  const router = useRouter();

  const handleRemoveItem = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.stopPropagation();

    removeFromBasket(id);
  };

  if (basket.length === 0) {
    return (
      <div className={styles.emptyBasketMessage}>
        <span>Your basket is empty</span>
      </div>
    );
  }

  return (
    <div>
      <ul className={styles.basketList}>
        {basket.map((b) => (
          <li
            onClick={() => {
              router.push(`/products/${b.id}`);
            }}
            key={b.id}
            className={styles.basketItem}
          >
            <Image
              src={b.image}
              width={1000}
              height={1000}
              alt={b.name}
              className={styles.productImage}
              style={{ objectFit: "cover", borderRadius: "6px" }}
            />
            <div className={styles.productDetails}>
              <h4>{b.name}</h4>
              <p>${b.price}</p>
            </div>

            <button
              onClick={(e) => handleRemoveItem(e, b.id)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
