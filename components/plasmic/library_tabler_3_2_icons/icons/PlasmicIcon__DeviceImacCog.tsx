/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacCogIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacCogIcon(props: DeviceImacCogIconProps) {
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
          "M12 17H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v8M3 13h13m-8 8h4m-2-4l-.5 4m7.501-2a2 2 0 104 0 2 2 0 00-4 0zm2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacCogIcon;
/* prettier-ignore-end */
