/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RvTruckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RvTruckIcon(props: RvTruckIconProps) {
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
          "M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zm-6 0h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 17h1a1 1 0 001-1v-4.528a2 2 0 00-.211-.894l-.96-1.92A3 3 0 0017.146 7H6a3 3 0 00-3 3v6a1 1 0 001 1h1m-2-5h18m-6 0V7M6 5.5A1.5 1.5 0 017.5 4h7a1.5 1.5 0 010 3h-7A1.5 1.5 0 016 5.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RvTruckIcon;
/* prettier-ignore-end */
