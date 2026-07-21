/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScubaDivingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScubaDivingIcon(props: ScubaDivingIconProps) {
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
          "M19 12a1 1 0 102 0 1 1 0 00-2 0zM2 2l3 3 1.5 4 3.5 2 6 2 1 4 2.5 3M11 8l4.5 1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScubaDivingIcon;
/* prettier-ignore-end */
