import Link from "next/link";
import styles from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>Oops! Product Not Found</h1>
      <p className={styles.message}>
        The product you are looking for does not exist or has been removed.
      </p>
      <Link href="/products" className={styles.backButton}>
        Go Back to Products page
      </Link>
    </div>
  );
}
