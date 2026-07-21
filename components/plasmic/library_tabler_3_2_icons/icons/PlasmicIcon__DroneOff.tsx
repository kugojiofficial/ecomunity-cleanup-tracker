/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DroneOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DroneOffIcon(props: DroneOffIconProps) {
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
          "M14 14h-4v-4m0 0L6.5 6.5m3.457-.55A3.503 3.503 0 007.04 3.04m-3.02.989A3.5 3.5 0 006 9.965M14 10l3.5-3.5m.5 3.465A3.5 3.5 0 1014.034 6M14 14l3.5 3.5m-3.465.5a3.5 3.5 0 005.936 1.98m.987-3.026a3.503 3.503 0 00-2.918-2.913M10 14l-3.5 3.5M6 14.035A3.5 3.5 0 109.966 18M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DroneOffIcon;
/* prettier-ignore-end */
