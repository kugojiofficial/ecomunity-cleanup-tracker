/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FireHydrantOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FireHydrantOffIcon(props: FireHydrantOffIconProps) {
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
          "M5 21h14m-2 0v-4m2-2v-2a1 1 0 00-1-1h-1V8a5 5 0 00-8.533-3.538M7.08 7.1A5.03 5.03 0 007 8v4H6a1 1 0 00-1 1v2a1 1 0 001 1h1v5m5-9a2 2 0 102 2M6 8h2m4 0h6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FireHydrantOffIcon;
/* prettier-ignore-end */
