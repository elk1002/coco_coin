import IChildren from "@/app/core/types/common/children.interface";
import { NextUIProvider } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";
const ProvidersComponent: FC<IChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default ProvidersComponent;
