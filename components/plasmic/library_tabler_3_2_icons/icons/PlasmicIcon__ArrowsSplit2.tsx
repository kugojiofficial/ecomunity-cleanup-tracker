/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowsSplit2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowsSplit2Icon(props: ArrowsSplit2IconProps) {
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
          "M21 17h-5.397a5 5 0 01-4.096-2.133l-.514-.734A5 5 0 006.897 12H3m18-5h-5.395a5 5 0 00-4.098 2.135l-.51.73A5 5 0 016.9 12H3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 10l3-3-3-3m0 16l3-3-3-3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowsSplit2Icon;
/* prettier-ignore-end */
