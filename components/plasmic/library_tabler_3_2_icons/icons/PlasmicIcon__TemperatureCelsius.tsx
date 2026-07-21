/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TemperatureCelsiusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TemperatureCelsiusIcon(props: TemperatureCelsiusIconProps) {
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
          "M4 8a2 2 0 104 0 2 2 0 00-4 0zm16 1a3 3 0 00-3-3h-1a3 3 0 00-3 3v6a3 3 0 003 3h1a3 3 0 003-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TemperatureCelsiusIcon;
/* prettier-ignore-end */
