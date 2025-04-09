import ProductDetailCard from "@/components/product-detail-card/ProductDetailCard";
import { getProductById } from "@/lib/data";
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

  return <ProductDetailCard product={product} />;
}
