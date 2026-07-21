/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAsanaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAsanaIcon(props: BrandAsanaIconProps) {
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
          "M9 7a3 3 0 106 0 3 3 0 00-6 0zm5 9a3 3 0 106 0 3 3 0 00-6 0zM4 16a3 3 0 106 0 3 3 0 00-6 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAsanaIcon;
/* prettier-ignore-end */
