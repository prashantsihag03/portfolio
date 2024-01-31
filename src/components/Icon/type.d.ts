import React from "react";

export default interface IconProp {
  href: string;
  title: string;
  src?: string;
  alt: string;
  children?: React.ReactNode;
}
