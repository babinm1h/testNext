import classNames from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import st from "./Badge.module.scss";

type Props = {
  variant?: "success" | "default";
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

function Badge({ variant = "default", children, ...props }: Props) {
  return (
    <span {...props} className={classNames(st.badge, `${st[variant]}`)}>
      {children}
    </span>
  );
}

export default Badge;
