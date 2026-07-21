/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StethoscopeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StethoscopeOffIcon(props: StethoscopeOffIconProps) {
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
          "M4.172 4.179A2 2 0 003 6v3.5a5.5 5.5 0 009.856 3.358M14 10V6a2 2 0 00-2-2h-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 15a6 6 0 0010.714 3.712m1.216-2.798c.046-.3.07-.605.07-.914v-3m-9-9v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 10a2 2 0 104 0 2 2 0 00-4 0zM3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default StethoscopeOffIcon;
/* prettier-ignore-end */
