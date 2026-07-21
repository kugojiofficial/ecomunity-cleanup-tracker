/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBootstrapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBootstrapIcon(props: BrandBootstrapIconProps) {
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
          "M2 12a2 2 0 002-2V6a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 002 2M2 12a2 2 0 012 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 012-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 16V8h3.5a2 2 0 010 4H9h4a2 2 0 010 4H9z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBootstrapIcon;
/* prettier-ignore-end */
