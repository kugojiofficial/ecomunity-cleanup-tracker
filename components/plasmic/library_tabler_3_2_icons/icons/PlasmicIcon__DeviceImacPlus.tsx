/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacPlusIcon(props: DeviceImacPlusIconProps) {
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
          "M12.5 17H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v8.5M3 13h13.5M8 21h4.5M10 17l-.5 4m6.5-2h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacPlusIcon;
/* prettier-ignore-end */
