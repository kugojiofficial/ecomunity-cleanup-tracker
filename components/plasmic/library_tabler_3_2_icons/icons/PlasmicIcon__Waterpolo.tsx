/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WaterpoloIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WaterpoloIcon(props: WaterpoloIconProps) {
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
        d={"M12 9a1 1 0 102 0 1 1 0 00-2 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 8l3 4 4.5 1 7.5-1M3 18.75A2.4 2.4 0 004 19a2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1 2.401 2.401 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 001-.25M12 16l.5-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.5 5a.5.5 0 100-1 .5.5 0 000 1z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WaterpoloIcon;
/* prettier-ignore-end */
