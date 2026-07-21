/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceSdCardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceSdCardIcon(props: DeviceSdCardIconProps) {
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
          "M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2h-6.172a2 2 0 00-1.414.586L5.586 7.414A2 2 0 005 8.828V19a2 2 0 002 2zm6-15v2m3-2v2m-6-1v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceSdCardIcon;
/* prettier-ignore-end */
