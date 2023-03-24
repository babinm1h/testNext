import React, { PropsWithChildren } from "react";
import st from "./MainLayout.module.scss";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={st.wrapper}>
      <main className={st.main}>{children}</main>
    </div>
  );
}

export default MainLayout;
