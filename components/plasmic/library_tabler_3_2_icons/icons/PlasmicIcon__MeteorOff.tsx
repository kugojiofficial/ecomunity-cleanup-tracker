/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MeteorOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MeteorOffIcon(props: MeteorOffIconProps) {
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
          "M9.75 5.761L13 3l-1 5 9-5-5 9h5l-2.467 2.536m-1.983 2.04l-2.441 2.51A6.5 6.5 0 115.254 9.58l2.322-1.972"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7 14.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MeteorOffIcon;
/* prettier-ignore-end */
