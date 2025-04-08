import { Search } from "@/components/search/Search";
import { Suspense } from "react";
import ProductsList from "@/components/products-list/ProductsList";
import { CardsSkeleton } from "@/components/skeletons/skeletons";

export default async function Products() {
  return (
    <>
      <Search />

      <Suspense fallback={<CardsSkeleton />}>
        <ProductsList />
      </Suspense>
    </>
  );
}
