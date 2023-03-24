"use client";
import { ITEMS_LIMIT } from "@/constants/common";
import { useDebouncedEffect } from "@/hooks/useDebouncedEffect";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import Button from "../UI/Button/Button";
import st from "./Pagination.module.scss";

const getPagePath = (page: string) => {
  const queryParams = new URLSearchParams(window.location.search);
  if (queryParams.has("page")) {
    queryParams.set("page", page);
  } else {
    queryParams.append("page", page);
  }
  const path = window.location.pathname + "?" + queryParams.toString();
  return path;
};

type Props = { currentPage: string; totalCount: number };

function Pagination({ totalCount, currentPage }: Props) {
  const router = useRouter();

  const [page, setPage] = useState(currentPage);
  const canPrev = +page > 1;
  const pages = Math.ceil((totalCount - ITEMS_LIMIT) / ITEMS_LIMIT);
  console.log(pages);

  const canNext = +page !== pages;

  const handleNextPage = useCallback(() => {
    setPage((prev) => `${+prev + 1}`);
  }, []);

  const handlePrevPage = useCallback(() => {
    setPage((prev) => `${+prev - 1}`);
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (+value > pages || value === "") return;
    setPage(value);
  };

  useDebouncedEffect(() => {
    const path = getPagePath(page);
    router.push(path);
  }, [page]);

  return (
    <div className={st.wrapper}>
      <Button variant="error" disabled={!canPrev} onClick={handlePrevPage}>
        Назад
      </Button>
      <input type="number" className={st.input} value={page} onChange={handleChangeInput} />
      <Button variant="success" onClick={handleNextPage} disabled={!canNext}>
        Вперед
      </Button>
    </div>
  );
}

export default Pagination;
