/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileHeartIcon(props: DeviceMobileHeartIconProps) {
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
        d={"M11.5 21H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v6m-7-7h2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 22l3.35-3.284a2.143 2.143 0 00.005-3.071 2.242 2.242 0 00-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 00-3.128-.006 2.143 2.143 0 00-.006 3.071L18 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceMobileHeartIcon;
/* prettier-ignore-end */
