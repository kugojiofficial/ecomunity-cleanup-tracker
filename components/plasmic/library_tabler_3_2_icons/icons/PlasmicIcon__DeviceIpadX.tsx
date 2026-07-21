/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceIpadXIcon(props: DeviceIpadXIconProps) {
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
          "M22 22l-5-5m0 5l5-5m-9 4H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v9M9 18h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadXIcon;
/* prettier-ignore-end */
