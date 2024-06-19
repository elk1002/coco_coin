import { FC, HTMLAttributes, ReactNode } from "react";
import IChildren from "@/app/core/types/common/children.interface";
const MainContainer: FC<IChildren & HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`min-w-[330px] max-w-[1920px] px-5 lg:px-20 xl:px-36 mx-auto w-full ${
        className ? className : ""
      }`}
      {...props}>
      {children}
    </div>
  );
};

export default MainContainer;
