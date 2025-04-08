import { getProducts } from "@/lib/data";
import { Product } from "@/lib/definitions";
import { Card } from "@/components/card/Card";
import styles from "./ProductsList.module.css";
import { Pagination } from "./Pagination";

export default async function ProductsList({
  name,
  page,
  limit,
}: {
  name: string;
  page: number;
  limit: number;
}) {
  const response = await getProducts(name, page, limit);

  const products: Product[] = response.products;
  const totalPages = response.totalPages;
  console.log(totalPages, "xxx");

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
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </>
  );
}
