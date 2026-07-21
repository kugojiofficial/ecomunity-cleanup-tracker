/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSpaceheyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSpaceheyIcon(props: BrandSpaceheyIconProps) {
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
          "M15 6a2 2 0 104 0 2 2 0 00-4 0zm-1 14h6v-6a3 3 0 00-6 0v6zM11 8v2.5A3.5 3.5 0 017.5 14H7a3 3 0 010-6h4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSpaceheyIcon;
/* prettier-ignore-end */
