/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BandageOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BandageOffIcon(props: BandageOffIconProps) {
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
          "M10 12v.01M12 14v.01m-1.487-7.523L12.5 4.5a4.95 4.95 0 017 7l-2.018 2.018M15.5 15.5l-4 4a4.95 4.95 0 01-7-7l4-4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BandageOffIcon;
/* prettier-ignore-end */
