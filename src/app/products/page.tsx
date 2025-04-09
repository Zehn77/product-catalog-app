import Search from "@/components/search/Search";
import { Suspense } from "react";
import ProductsList from "@/components/products-list/ProductsList";
import { CardsSkeleton } from "@/components/skeletons/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Explore a Wide Variety of Items",
  description:
    "Browse and explore a variety of products. Find detailed information on each product and make informed decisions.",
};

export default async function Products(props: {
  searchParams?: Promise<{
    name?: string;
    page?: string;
    limit?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const name = searchParams?.name || "";
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 3;

  return (
    <>
      <Search />
      <Suspense key={name + limit} fallback={<CardsSkeleton />}>
        <ProductsList name={name} page={page} limit={limit} />
      </Suspense>
    </>
  );
}
