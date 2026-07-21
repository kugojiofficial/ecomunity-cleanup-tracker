/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DevicesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DevicesOffIcon(props: DevicesOffIconProps) {
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
          "M13 9a1 1 0 011-1h6a1 1 0 011 1v8m-1 3h-6a1 1 0 01-1-1v-6m5-5V5a1 1 0 00-1-1H8M4 4a1 1 0 00-1 1v12a1 1 0 001 1h9m3-9h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DevicesOffIcon;
/* prettier-ignore-end */
