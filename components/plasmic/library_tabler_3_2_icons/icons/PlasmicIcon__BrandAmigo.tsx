/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAmigoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAmigoIcon(props: BrandAmigoIconProps) {
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
        d={"M10 12a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.591 3.635l-7.13 14.082c-1.712 3.38 1.759 5.45 3.69 3.573l1.86-1.81c3.142-3.054 4.959-2.99 8.039.11l1.329 1.337c2.372 2.387 5.865.078 4.176-3.225L14.36 3.635c-1.114-2.18-3.665-2.18-4.769 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAmigoIcon;
/* prettier-ignore-end */
