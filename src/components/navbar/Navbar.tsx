"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useBasket } from "@/context/BasketContext";
import { SlBasket } from "react-icons/sl";

export function Navbar() {
  const { basket } = useBasket();

  const length = basket.length;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>

        <Link href="/basket" className={styles.basket_container}>
          <div className={styles.basket}>
            <SlBasket style={{ width: "20px", height: "20px" }} />
            <span>Basket</span>
          </div>
          {length !== 0 && (
            <div className={styles.circle}>
              <span>{length}</span>
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}
