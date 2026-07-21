/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatteryOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatteryOffIcon(props: BatteryOffIconProps) {
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
          "M3 3l18 18M11 7h6a2 2 0 012 2v.5a.5.5 0 00.5.5.5.5 0 01.5.5v3a.5.5 0 01-.5.5.5.5 0 00-.5.5v.5m-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BatteryOffIcon;
/* prettier-ignore-end */
