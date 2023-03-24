import ProductsList from "@/components/ProductsList/ProductsList";
import { ITEMS_LIMIT } from "@/constants/common";
import { IProduct } from "@/types/entities/Product";
import React from "react";

interface IFetchProductsResponse {
  total: number;
  skip: number;
  limit: number;
  products: IProduct[];
}

const fetchProducts = async (page: string): Promise<IFetchProductsResponse> => {
  const skip = +page === 1 ? 0 : ITEMS_LIMIT * +page;
  const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`);
  return await res.json();
};

interface Props {
  searchParams: Record<string, string>;
  params: Record<string, string>;
}

const Home = async ({ searchParams }: Props) => {
  const page = searchParams.page || "1";
  const data = await fetchProducts(page);

  return <ProductsList products={data.products} currentPage={page} totalCount={data.total} />;
};

export default Home;
