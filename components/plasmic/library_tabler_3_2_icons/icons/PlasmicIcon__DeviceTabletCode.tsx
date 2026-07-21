/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceTabletCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceTabletCodeIcon(props: DeviceTabletCodeIconProps) {
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
          "M11.5 21H6a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v9m-6.656 3.06a1 1 0 00-1.07 1.627M20 21l2-2-2-2m-3 0l-2 2 2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceTabletCodeIcon;
/* prettier-ignore-end */
