"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
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

        <div className={styles.basket}>
          <Link href="/basket">🛒 Basket</Link>
        </div>
      </div>
    </nav>
  );
}
