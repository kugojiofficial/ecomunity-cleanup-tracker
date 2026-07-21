/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScreenshotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScreenshotIcon(props: ScreenshotIconProps) {
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
          "M7 19a2 2 0 01-2-2m0-4v-2m0-4a2 2 0 012-2m4 0h2m4 0a2 2 0 012 2m0 4v2m0 4v4m2-2h-4m-4 0h-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScreenshotIcon;
/* prettier-ignore-end */
