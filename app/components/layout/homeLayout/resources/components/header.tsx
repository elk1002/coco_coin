import { AssetsLogo } from "@/app/assets";
import Image from "next/image";
import React from "react";
import MainContainer from "../../../container";

const Header = () => {
  return (
    <MainContainer>
      Header
      <Image src={AssetsLogo} alt="Logo" />
    </MainContainer>
  );
};

export default Header;
