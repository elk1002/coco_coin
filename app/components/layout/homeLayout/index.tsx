import React, { FC } from "react";
import { Footer, Header } from "./resources";
import IChildren from "@/app/core/types/common/children.interface";

const HomeLayout: FC<IChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
