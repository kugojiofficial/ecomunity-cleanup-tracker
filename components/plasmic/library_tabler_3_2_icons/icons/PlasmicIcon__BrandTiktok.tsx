/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTiktokIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTiktokIcon(props: BrandTiktokIconProps) {
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
          "M21 7.917v4.034A9.949 9.949 0 0116 10v4.5a6.5 6.5 0 11-8-6.326V12.5a2.5 2.5 0 104 2V3h4.083A6.005 6.005 0 0021 7.917z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTiktokIcon;
/* prettier-ignore-end */
