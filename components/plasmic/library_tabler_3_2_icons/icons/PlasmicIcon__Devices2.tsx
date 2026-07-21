/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Devices2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Devices2Icon(props: Devices2IconProps) {
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
          "M10 15H4a1 1 0 01-1-1V6a1 1 0 011-1h6m3 0a1 1 0 011-1h6a1 1 0 011 1v14a1 1 0 01-1 1h-6a1 1 0 01-1-1V5zM7 19h3m7-11v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M16 16a1 1 0 102 0 1 1 0 00-2 0zm-7-1v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Devices2Icon;
/* prettier-ignore-end */
