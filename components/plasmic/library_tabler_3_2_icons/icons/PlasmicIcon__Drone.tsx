/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DroneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DroneIcon(props: DroneIconProps) {
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
          "M10 10h4v4h-4v-4zm0 0L6.5 6.5M9.96 6A3.5 3.5 0 106 9.96m8 .04l3.5-3.5m.5 3.46A3.5 3.5 0 1014.04 6M14 14l3.5 3.5m-3.46.5A3.5 3.5 0 1018 14.04M10 14l-3.5 3.5M6 14.04A3.5 3.5 0 109.96 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DroneIcon;
/* prettier-ignore-end */
