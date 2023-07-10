import React from "react";
import Avatar from "../images/avatar2.png";
import Image from "next/image";

type Props = {
  type: string;
};

export const Header = (props: Props) => {
  return (
    <div>
      <Image className="w-96 m-auto" src={Avatar} alt="Me" />
    </div>
  );
};

export default Header;
