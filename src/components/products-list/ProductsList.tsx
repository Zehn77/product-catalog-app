import { getProducts } from "@/lib/data";
import { Product } from "@/lib/definitions";
import { Card } from "@/components/card/Card";
import styles from "./ProductsList.module.css"; // Import the CSS module

export default async function ProductsList() {
  const products: Product[] = await getProducts();

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
