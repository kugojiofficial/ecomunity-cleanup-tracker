/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceComputerCameraOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceComputerCameraOffIcon(
  props: DeviceComputerCameraOffIconProps
) {
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
        d={"M6.15 6.153a7 7 0 009.696 9.696m2-2a7 7 0 00-9.699-9.695"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.13 9.122a3 3 0 003.743 3.749m2-2a3 3 0 00-3.737-3.736M8 16l-2.091 3.486A1 1 0 006.766 21h10.468a1 1 0 00.857-1.514L16 16M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceComputerCameraOffIcon;
/* prettier-ignore-end */
