/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCypressIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCypressIcon(props: BrandCypressIconProps) {
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
          "M19.48 17.007A9 9 0 1012 21a2.08 2.08 0 001.974-1.423L17.5 9m-4 0l2 6m-4.736-5.589a3 3 0 10-.023 5.19"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCypressIcon;
/* prettier-ignore-end */
