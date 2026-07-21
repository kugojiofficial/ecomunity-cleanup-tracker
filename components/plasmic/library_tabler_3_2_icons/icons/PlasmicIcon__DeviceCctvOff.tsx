/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceCctvOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceCctvOffIcon(props: DeviceCctvOffIconProps) {
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
          "M7 7H4a1 1 0 01-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 011 1v2a1 1 0 01-1 1h-9m-.64 3.35a4 4 0 105.285 5.3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 7v7c0 .321-.022.637-.064.947m-1.095 2.913A7 7 0 015 14V7m7 7h.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceCctvOffIcon;
/* prettier-ignore-end */
