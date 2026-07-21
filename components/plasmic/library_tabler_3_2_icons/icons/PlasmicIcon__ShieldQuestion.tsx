/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldQuestionIcon(props: ShieldQuestionIconProps) {
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
          "M15.065 19.732c-.95.557-1.98.986-3.065 1.268A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3c.51 1.738.617 3.55.333 5.303M19 22v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldQuestionIcon;
/* prettier-ignore-end */
