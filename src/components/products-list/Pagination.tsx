"use client";

import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  let currentPage: string | number | null = searchParams.get("page");

  currentPage = currentPage ? Number(currentPage) : 1;

  const limit = searchParams.get("limit");

  const handlePageClick = (event: { selected: number }) => {
    if (event.selected + 1 === currentPage) return;

    const page = event.selected + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", `${page}`);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.super_container}>
      <div className={styles.container}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={styles.paginationContainer}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          activeClassName={styles.active}
          disabledClassName={styles.disabled}
          initialPage={currentPage - 1}
        />

        <select
          className={styles.select}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams);
            params.set("limit", `${e.target.value}`);
            params.set("page", "1");
            replace(`${pathname}?${params.toString()}`);
          }}
          defaultValue={limit ?? 3}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
        </select>
      </div>
    </div>
  );
}
