/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileUpIcon(props: DeviceMobileUpIconProps) {
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
          "M12.5 21H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v7m1 10v-6m3 3l-3-3-3 3M11 4h2m-1 13v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceMobileUpIcon;
/* prettier-ignore-end */
