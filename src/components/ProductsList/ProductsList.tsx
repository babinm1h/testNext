import { IProduct } from "@/types/entities/Product";
import React from "react";
import Pagination from "../Pagination/Pagination";
import ProductItem from "./ProductItem/ProductItem";
import st from "./ProductsList.module.scss";

type Props = {
  products: IProduct[];
  currentPage: string;
  totalCount: number;
};

function ProductsList({ products, currentPage, totalCount }: Props) {
  return (
    <div className={st.wrapper}>
      <div className={st.list}>
        {products.map((p) => (
          <ProductItem description={p.description} thumbnail={p.thumbnail} price={p.price} title={p.title} key={p.id} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalCount={totalCount} />
    </div>
  );
}

export default ProductsList;
