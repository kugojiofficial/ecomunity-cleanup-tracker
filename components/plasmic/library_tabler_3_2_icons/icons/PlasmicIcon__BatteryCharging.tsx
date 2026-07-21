/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatteryChargingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatteryChargingIcon(props: BatteryChargingIconProps) {
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
          "M16 7h1a2 2 0 012 2v.5a.5.5 0 00.5.5.5.5 0 01.5.5v3a.5.5 0 01-.5.5.5.5 0 00-.5.5v.5a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v6a2 2 0 002 2h1m5-9l-2 4h3l-2 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BatteryChargingIcon;
/* prettier-ignore-end */
