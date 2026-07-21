/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SolarPanel2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SolarPanel2Icon(props: SolarPanel2IconProps) {
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
          "M8 2a4 4 0 008 0M4 3h1m14 0h1m-8 6v1m5.2-2.8l.707.707M6.8 7.2l-.7.7M4.28 21h15.44a1 1 0 00.97-1.243l-1.5-6a1 1 0 00-.97-.757H5.78a1 1 0 00-.97.757l-1.5 6A1 1 0 004.28 21zM4 17h16m-10-4l-1 8m5-8l1 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SolarPanel2Icon;
/* prettier-ignore-end */
