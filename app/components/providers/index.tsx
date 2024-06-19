import IChildren from "@/app/core/types/common/children.interface";
import { NextUIProvider } from "@nextui-org/react";
import { FC } from "react";
const ProvidersComponent: FC<IChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default ProvidersComponent;
