/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGoogleBigQueryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGoogleBigQueryIcon(props: BrandGoogleBigQueryIconProps) {
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
          "M17.73 19.875A2.225 2.225 0 0115.782 21H8.499a2.223 2.223 0 01-1.947-1.158l-4.272-6.75a2.269 2.269 0 010-2.184l4.272-6.75A2.225 2.225 0 018.498 3h7.285c.809 0 1.554.443 1.947 1.158l3.98 6.75a2.33 2.33 0 010 2.25l-3.98 6.75v-.033z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 11.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm6 2.5l2 2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGoogleBigQueryIcon;
/* prettier-ignore-end */
