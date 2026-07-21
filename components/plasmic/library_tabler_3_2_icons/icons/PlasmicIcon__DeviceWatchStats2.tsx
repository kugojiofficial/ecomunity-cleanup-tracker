/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceWatchStats2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceWatchStats2Icon(props: DeviceWatchStats2IconProps) {
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
          "M6 9a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9zm3 9v3h6v-3M9 6V3h6v3m-3 4a2 2 0 102 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceWatchStats2Icon;
/* prettier-ignore-end */
