/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceCameraPhoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceCameraPhoneIcon(props: DeviceCameraPhoneIconProps) {
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
          "M16 8.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM13 7H5a2 2 0 00-2 2v7a2 2 0 002 2h13a2 2 0 002-2v-2m-3 1v-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceCameraPhoneIcon;
/* prettier-ignore-end */
