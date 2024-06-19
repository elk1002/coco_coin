import { AssetsLogo } from "@/app/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      Header
      <Image src={AssetsLogo} alt="Logo" />
    </div>
  );
};

export default Footer;
