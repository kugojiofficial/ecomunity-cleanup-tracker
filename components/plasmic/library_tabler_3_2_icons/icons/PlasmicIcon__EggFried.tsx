/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EggFriedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EggFriedIcon(props: EggFriedIconProps) {
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
        d={"M9 12a3 3 0 106 0 3 3 0 00-6 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 3a5 5 0 014.872 6.13 3 3 0 01.178 5.681 3 3 0 11-4.684 3.626 5 5 0 01-9.161-1.205 5 5 0 01.499-3.795 5 5 0 014.645-8.856A4.982 4.982 0 0114 2.996V3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EggFriedIcon;
/* prettier-ignore-end */
