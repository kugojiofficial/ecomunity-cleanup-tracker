/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AutomaticGearboxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AutomaticGearboxIcon(props: AutomaticGearboxIconProps) {
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
          "M17 17v4h1a2 2 0 000-4h-1zm0-6h1.5a1.5 1.5 0 100-3H17v5M3 5a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 7v3a1 1 0 001 1h3v7a1 1 0 001 1h3m-4-8h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AutomaticGearboxIcon;
/* prettier-ignore-end */
