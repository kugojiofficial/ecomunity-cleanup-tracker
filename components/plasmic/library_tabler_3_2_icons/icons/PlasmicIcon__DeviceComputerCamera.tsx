/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceComputerCameraIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceComputerCameraIcon(props: DeviceComputerCameraIconProps) {
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
        d={"M5 10a7 7 0 1014 0 7 7 0 00-14 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 10a3 3 0 106 0 3 3 0 00-6 0zm-1 6l-2.091 3.486A1 1 0 006.766 21h10.468a1 1 0 00.857-1.514L16 16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceComputerCameraIcon;
/* prettier-ignore-end */
