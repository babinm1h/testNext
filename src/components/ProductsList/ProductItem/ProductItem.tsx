import Button from "@/components/UI/Button/Button";
import { IProduct } from "@/types/entities/Product";
import Image from "next/image";
import React from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import st from "./ProductItem.module.scss";

type Props = Omit<IProduct, "id">;

const ProductItem = React.memo(function ProductItem({ description, thumbnail, price, title }: Props) {
  return (
    <div className={st.item}>
      <div className={st.imgWrapper}>
        <Image alt={title} src={thumbnail} className={st.img} fill sizes="100%" />
      </div>
      <ProductInfo description={description} price={price} title={title} />
      <div className={st.footer}>
        <Button>В корзину</Button>
      </div>
    </div>
  );
});

export default ProductItem;
