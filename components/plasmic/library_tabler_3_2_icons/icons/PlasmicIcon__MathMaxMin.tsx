/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MathMaxMinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MathMaxMinIcon(props: MathMaxMinIconProps) {
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
        d={"M15 19a2 2 0 104 0 2 2 0 00-4 0zM5 5a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 14s.605-5.44 2.284-7.862m3.395.026c2.137 2.652 4.547 9.113 6.68 11.719m3.389.155C19.45 17.158 20.2 14.478 21 10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MathMaxMinIcon;
/* prettier-ignore-end */
