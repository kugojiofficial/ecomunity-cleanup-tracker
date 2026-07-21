/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ruler2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ruler2Icon(props: Ruler2IconProps) {
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
          "M17 3l4 4L7 21l-4-4L17 3zm-1 4l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Ruler2Icon;
/* prettier-ignore-end */
