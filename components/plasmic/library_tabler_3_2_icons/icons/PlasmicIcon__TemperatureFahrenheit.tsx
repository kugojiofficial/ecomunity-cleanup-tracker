/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TemperatureFahrenheitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TemperatureFahrenheitIcon(
  props: TemperatureFahrenheitIconProps
) {
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
        d={"M4 8a2 2 0 104 0 2 2 0 00-4 0zm9 4h5m2-6h-6a1 1 0 00-1 1v11"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TemperatureFahrenheitIcon;
/* prettier-ignore-end */
