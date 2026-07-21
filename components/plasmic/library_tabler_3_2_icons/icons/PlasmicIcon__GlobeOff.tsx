/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlobeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlobeOffIcon(props: GlobeOffIconProps) {
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
          "M7.353 7.355a4 4 0 005.29 5.293m2.007-2.009a4 4 0 00-5.3-5.284M5.75 15a8.015 8.015 0 009.792.557m2.02-1.998A8.014 8.014 0 0015 2m-4 15v4m-4 0h8M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GlobeOffIcon;
/* prettier-ignore-end */
