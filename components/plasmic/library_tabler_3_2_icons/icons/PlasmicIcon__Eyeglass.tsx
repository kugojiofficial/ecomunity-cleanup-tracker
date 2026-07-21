/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeglassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeglassIcon(props: EyeglassIconProps) {
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
          "M8 4H6L3 14M16 4h2l3 10m-11 2h4m7 .5a3.5 3.5 0 11-7 0V14h7v2.5zm-11 0a3.5 3.5 0 11-7 0V14h7v2.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EyeglassIcon;
/* prettier-ignore-end */
