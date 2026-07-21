/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapPinOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapPinOffIcon(props: MapPinOffIconProps) {
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
        d={"M9.442 9.432a3 3 0 004.113 4.134M15 11a3 3 0 00-3-3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.152 17.162L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 01-.476-10.794m2.18-1.82a8.003 8.003 0 0110.91 10.912M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MapPinOffIcon;
/* prettier-ignore-end */
