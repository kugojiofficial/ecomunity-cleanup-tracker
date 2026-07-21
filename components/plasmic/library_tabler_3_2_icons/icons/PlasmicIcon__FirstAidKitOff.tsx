/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FirstAidKitOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FirstAidKitOffIcon(props: FirstAidKitOffIconProps) {
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
          "M8.595 4.577A2 2 0 0110 4h4a2 2 0 012 2v2m-4 0h6a2 2 0 012 2v6m-.576 3.405A2 2 0 0118 20H6a2 2 0 01-2-2v-8a2 2 0 012-2h2m2 6h4m-2-2v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FirstAidKitOffIcon;
/* prettier-ignore-end */
