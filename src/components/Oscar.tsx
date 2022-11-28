import React, { ReactNode } from "react";
interface OscarProps {
  children?: ReactNode;
}
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
