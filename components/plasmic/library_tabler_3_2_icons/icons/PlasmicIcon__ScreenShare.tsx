/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScreenShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScreenShareIcon(props: ScreenShareIconProps) {
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
          "M21 12v3a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h9M7 20h10m-8-4v4m6-4v4m2-16h4v4m-5 1l5-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScreenShareIcon;
/* prettier-ignore-end */
