/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleDottedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleDottedIcon(props: CircleDottedIconProps) {
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
          "M7.5 4.21v.01M4.21 7.5v.01M3 12v.01m1.21 4.49v.01m3.29 3.28v.01M12 21v.01m4.5-1.22v.01m3.29-3.3v.01M21 12v.01M19.79 7.5v.01m-3.29-3.3v.01M12 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CircleDottedIcon;
/* prettier-ignore-end */
