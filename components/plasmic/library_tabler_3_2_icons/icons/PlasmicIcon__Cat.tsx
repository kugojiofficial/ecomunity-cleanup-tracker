/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CatIcon(props: CatIconProps) {
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
          "M20 3v10a8 8 0 01-16 0V3l3.432 3.432A7.963 7.963 0 0112 5c1.769 0 3.403.574 4.728 1.546L20 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2 16h5l-4 4m19-4h-5l4 4m-10-4a1 1 0 102 0 1 1 0 00-2 0zm-2-5v.01m6-.01v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CatIcon;
/* prettier-ignore-end */
