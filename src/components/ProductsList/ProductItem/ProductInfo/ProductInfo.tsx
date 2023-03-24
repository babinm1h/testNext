import Badge from "@/components/UI/Badge/Badge";
import { IProduct } from "@/types/entities/Product";
import React from "react";
import st from "./ProductInfo.module.scss";

type Props = Pick<IProduct, "description" | "price" | "title">;

function ProductInfo({ description, price, title }: Props) {
  return (
    <div className={st.info}>
      <div className={st.title}>
        {title} <Badge variant="success">NEW</Badge>
      </div>
      <span className={st.price}>{price} $</span>
      <p className={st.desc}>{description}</p>
    </div>
  );
}

export default ProductInfo;
