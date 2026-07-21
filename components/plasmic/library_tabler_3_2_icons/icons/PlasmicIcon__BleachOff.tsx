/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BleachOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BleachOffIcon(props: BleachOffIconProps) {
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
          "M5 19h14m1.986-1.977a2 2 0 00-.146-.773L13.74 4a2 2 0 00-3.5 0l-.815 1.405M7.937 7.973L3.14 16.25A2 2 0 004.89 19M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BleachOffIcon;
/* prettier-ignore-end */
