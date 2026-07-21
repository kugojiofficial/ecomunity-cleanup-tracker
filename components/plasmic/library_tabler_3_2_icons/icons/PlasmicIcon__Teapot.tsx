/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TeapotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TeapotIcon(props: TeapotIconProps) {
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
          "M10.29 3h3.42a2 2 0 011.988 1.78l1.555 14A2 2 0 0115.265 21h-6.53a2 2 0 01-1.988-2.22l1.555-14A2 2 0 0110.29 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.47 12.5L3.213 7.481A.9.9 0 013.903 6h13.09A3 3 0 0120 9v3c0 1.657-1.346 3-3.007 3M7 17h10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TeapotIcon;
/* prettier-ignore-end */
