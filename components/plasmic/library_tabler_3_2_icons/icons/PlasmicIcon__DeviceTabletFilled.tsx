/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceTabletFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceTabletFilledIcon(props: DeviceTabletFilledIconProps) {
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
          "M18 2a2 2 0 011.995 1.85L20 4v16a2 2 0 01-1.85 1.995L18 22H6a2 2 0 01-1.995-1.85L4 20V4a2 2 0 011.85-1.995L6 2h12zm-6 13a2 2 0 00-1.977 1.697l-.018.154L10 17l.005.15A2 2 0 1012 15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeviceTabletFilledIcon;
/* prettier-ignore-end */
