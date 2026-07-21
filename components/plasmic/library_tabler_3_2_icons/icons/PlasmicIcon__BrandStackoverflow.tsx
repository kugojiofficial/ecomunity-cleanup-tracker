/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandStackoverflowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandStackoverflowIcon(props: BrandStackoverflowIconProps) {
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
          "M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1M8 16h8m-7.678-3.418l7.956.836m-7.491-4.25l7.826 1.664m-6.517-5.068l7.608 2.472"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandStackoverflowIcon;
/* prettier-ignore-end */
