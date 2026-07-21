/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldOffIcon(props: WorldOffIconProps) {
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
          "M5.657 5.615a9 9 0 1012.717 12.739m1.672-2.322A9 9 0 007.98 3.948M3.6 9H9m4 0h7.4M3.6 15H15m4 0h1.4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.5 3a17.002 17.002 0 00-1.493 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833m1-18a16.982 16.982 0 012.549 8.005m-.207 3.818A16.977 16.977 0 0112.5 21M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldOffIcon;
/* prettier-ignore-end */
