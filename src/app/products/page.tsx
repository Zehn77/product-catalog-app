import Search from "@/components/search/Search";
import { Suspense } from "react";
import ProductsList from "@/components/products-list/ProductsList";
import { CardsSkeleton } from "@/components/skeletons/skeletons";

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
