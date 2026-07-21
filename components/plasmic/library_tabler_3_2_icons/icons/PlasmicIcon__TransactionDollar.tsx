/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransactionDollarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransactionDollarIcon(props: TransactionDollarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.8 13a2 2 0 00-1.8-1h-2a2 2 0 000 4h2a2 2 0 010 4h-2a2 2 0 01-1.8-1m2.8-8v10M3 5a2 2 0 104 0 2 2 0 00-4 0zm12 0a2 2 0 104 0 2 2 0 00-4 0zM7 5h8M7 5v8a3 3 0 003 3h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransactionDollarIcon;
/* prettier-ignore-end */
