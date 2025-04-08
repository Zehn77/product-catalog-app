import { Product } from "@/lib/definitions";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

export function Card({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.content}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    </Link>
  );
}
