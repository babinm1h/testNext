import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import React, { FC, PropsWithChildren } from "react";
import "../styles/global.scss";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next app</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <div id="next">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
