/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListNumbersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListNumbersIcon(props: ListNumbersIconProps) {
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
          "M11 6h9m-9 6h9m-8 6h8M4 16a2 2 0 014 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ListNumbersIcon;
/* prettier-ignore-end */
