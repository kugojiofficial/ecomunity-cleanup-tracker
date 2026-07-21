/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldPauseIcon(props: ShieldPauseIconProps) {
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
          "M13.004 20.692c-.329.117-.664.22-1.004.308A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3 12 12 0 01-.081 7.034M17 17v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldPauseIcon;
/* prettier-ignore-end */
