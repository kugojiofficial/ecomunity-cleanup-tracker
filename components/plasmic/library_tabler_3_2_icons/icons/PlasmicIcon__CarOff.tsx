/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarOffIcon(props: CarOffIconProps) {
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
        d={"M5 17a2 2 0 104 0 2 2 0 00-4 0zm10.584-1.412a2 2 0 002.828 2.83"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 17H3v-6m0 0l2-5h1m-3 5h8m-1-5h4l4 5m0 0h1a2 2 0 012 2v4m-3-6h-3m0 6H9m3-9V6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarOffIcon;
/* prettier-ignore-end */
