import classNames from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import st from "./Button.module.scss";

type Props = {
  variant?: "success" | "default" | "error" | "danger";
  href?: string;
  fullWidth?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button({ variant = "default", href, fullWidth = false, children, ...props }: Props) {
  const classes = classNames(st.button, `${st[variant]}`, { [st.fullWidth]: fullWidth });

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="_noreferer">
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

export default Button;
