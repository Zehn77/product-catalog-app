import { getProducts } from "@/lib/data";
import { Product } from "@/lib/definitions";
import { Card } from "@/components/card/Card";
import styles from "./ProductsList.module.css";

export default async function ProductsList({ name }: { name: string }) {
  const products: Product[] = await getProducts(name);

  const emptyProducts = (
    <div className={styles.containerEmptyProducts}>
      <h2 className={styles.title}>No products found</h2>
      <p className={styles.text}>Try adjusting your search or filters.</p>
    </div>
  );

  if (products.length === 0) {
    return emptyProducts;
  }

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}

      {/* <button>show more </button> */}
    </div>
  );
}
