/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HammerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HammerOffIcon(props: HammerOffIconProps) {
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
          "M10.698 10.72L4.03 17.418a2.09 2.09 0 000 2.967 2.11 2.11 0 002.976 0l6.696-6.676m5.011.993l2-2a1 1 0 000-1.414l-7.586-7.586a1 1 0 00-1.414 0l-2 2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HammerOffIcon;
/* prettier-ignore-end */
