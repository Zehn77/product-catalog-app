import Search from "@/components/search/Search";
import { Suspense } from "react";
import ProductsList from "@/components/products-list/ProductsList";
import { CardsSkeleton } from "@/components/skeletons/skeletons";

export default async function Products(props: {
  searchParams?: Promise<{
    name?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const name = searchParams?.name || "";

  return (
    <>
      <Search />

      <Suspense key={name} fallback={<CardsSkeleton />}>
        <ProductsList name={name} />
      </Suspense>
    </>
  );
}
