/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBilibiliIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBilibiliIcon(props: BrandBilibiliIconProps) {
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
          "M3 10a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7a4 4 0 01-4-4v-6zm5-7l2 3m6-3l-2 3m-5 7v-2m6 0v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBilibiliIcon;
/* prettier-ignore-end */
