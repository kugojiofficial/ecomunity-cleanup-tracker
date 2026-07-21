/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SunMoonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SunMoonIcon(props: SunMoonIconProps) {
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
          "M9.173 14.83a4 4 0 115.657-5.657m-3.536 3.534l.174.247a7.5 7.5 0 008.845 2.492A9 9 0 015.642 18.36M3 12h1m8-9v1M5.6 5.6l.7.7M3 21L21 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SunMoonIcon;
/* prettier-ignore-end */
