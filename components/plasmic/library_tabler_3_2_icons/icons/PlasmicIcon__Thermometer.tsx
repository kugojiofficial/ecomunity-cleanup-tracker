/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThermometerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThermometerIcon(props: ThermometerIconProps) {
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
          "M19 5a2.829 2.829 0 010 4l-8 8H7v-4l8-8a2.828 2.828 0 014 0zm-3 2l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ThermometerIcon;
/* prettier-ignore-end */
