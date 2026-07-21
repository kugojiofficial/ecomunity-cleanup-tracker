/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SkiJumpingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SkiJumpingIcon(props: SkiJumpingIconProps) {
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
        d={"M11 3a1 1 0 102 0 1 1 0 00-2 0zm6 14.5L12 13V7l5 4M7 17.5l5-4.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.103 21.58l6.762-14.502a2 2 0 00-.968-2.657m-12 17.159L2.135 7.077a2 2 0 01.968-2.657M7 11l5-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SkiJumpingIcon;
/* prettier-ignore-end */
