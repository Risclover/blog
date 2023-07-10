import React from "react";
import Avatar from "../images/avatar2.png";
import Image from "next/image";

type Props = {};

const header = (props: Props) => {
  return (
    <div>
      <Image src={Avatar} />
    </div>
  );
};
