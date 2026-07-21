/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileOffIcon(props: DeviceMobileOffIconProps) {
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
          "M7.159 3.185C7.415 3.066 7.699 3 8 3h8a2 2 0 012 2v9m0 4v1a2 2 0 01-2 2H8a2 2 0 01-2-2V6m5-2h2M3 3l18 18m-9-4v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceMobileOffIcon;
/* prettier-ignore-end */
