import ProductDetailCard from "@/components/product-detail-card/ProductDetailCard";
import { getProductById } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for is not available.",
    };
  }

  return {
    title: `${product.name} - Product Details`,
    description: product.name,
    openGraph: {
      title: `${product.name} - Product Details`,
      description: product.name,
    },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetailCard product={product} />
    </>
  );
}
