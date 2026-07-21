/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TowerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TowerOffIcon(props: TowerOffIconProps) {
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
          "M10 6V4a1 1 0 011-1h2a1 1 0 011 1v2h3V4a1 1 0 011-1h1a1 1 0 011 1v4.394a2 2 0 01-.336 1.11l-1.328 1.992a2 2 0 00-.336 1.11V14m0 4v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-7.394a2 2 0 00-.336-1.11L4.336 9.504A2 2 0 014 8.394V4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 21v-5a2 2 0 014 0v5M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TowerOffIcon;
/* prettier-ignore-end */
