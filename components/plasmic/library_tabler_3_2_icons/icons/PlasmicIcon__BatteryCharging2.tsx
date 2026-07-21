/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatteryCharging2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatteryCharging2Icon(props: BatteryCharging2IconProps) {
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
          "M4 9a2 2 0 012-2h11a2 2 0 012 2v.5a.5.5 0 00.5.5.5.5 0 01.5.5v3a.5.5 0 01-.5.5.5.5 0 00-.5.5v.5a2 2 0 01-2 2h-4.5M3 15h6v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm3 7v-3m-2-4v-2.5M8 15v-2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BatteryCharging2Icon;
/* prettier-ignore-end */
