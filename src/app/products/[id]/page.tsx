import Image from "next/image";
import { getProductById } from "@/lib/data";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

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
      </div>
    </div>
  );
}
