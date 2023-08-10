import React, { useRef, useState } from "react";
import ImageModal from "@/components/imagemodal";
import Layout from "@/components/layout";
import MobileTableofContents from "@/components/mobiletoc";
import TableofContents from "@/components/tableofcontents";
import Head from "next/head";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml?: string;
    subtitle: string;
    category: string;
  };

  fileContent: { slug: string; title: string; level: number }[];

  
};

export default function Project({}: Props) {
  return <div>Project</div>;
}
