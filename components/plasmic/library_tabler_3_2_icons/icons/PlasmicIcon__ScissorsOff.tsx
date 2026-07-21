/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScissorsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScissorsOffIcon(props: ScissorsOffIconProps) {
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
          "M4.432 4.442a3 3 0 104.114 4.146M3 17a3 3 0 106 0 3 3 0 00-6 0zm5.6-1.6L12 12m2-2l5-5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScissorsOffIcon;
/* prettier-ignore-end */
