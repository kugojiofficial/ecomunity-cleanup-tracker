/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RazorElectricIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RazorElectricIcon(props: RazorElectricIconProps) {
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
          "M8 3v2m4-2v2m4-2v2m-7 7v6a3 3 0 006 0v-6H9zM8 5h8l-1 4H9L8 5zm4 12v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RazorElectricIcon;
/* prettier-ignore-end */
