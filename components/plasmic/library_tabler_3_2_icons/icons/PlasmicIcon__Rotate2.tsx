/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rotate2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rotate2Icon(props: Rotate2IconProps) {
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
          "M15 4.55a8.031 8.031 0 10-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01m3.84-1.58v.01m2.53-3.28v.01m.57-4.11v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Rotate2Icon;
/* prettier-ignore-end */
