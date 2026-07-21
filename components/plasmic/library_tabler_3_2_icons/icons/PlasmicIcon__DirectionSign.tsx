/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DirectionSignIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DirectionSignIcon(props: DirectionSignIconProps) {
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
          "M3.32 12.774l7.906 7.905c.427.428 1.12.428 1.548 0l7.905-7.905a1.095 1.095 0 000-1.548l-7.905-7.905a1.095 1.095 0 00-1.548 0l-7.905 7.905a1.095 1.095 0 000 1.548H3.32zM8 12h7.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 8.5l3.5 3.5-3.5 3.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DirectionSignIcon;
/* prettier-ignore-end */
