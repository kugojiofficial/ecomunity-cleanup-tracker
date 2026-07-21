/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LifebuoyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LifebuoyIcon(props: LifebuoyIconProps) {
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
        d={"M8 12a4 4 0 108 0 4 4 0 00-8 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 12a9 9 0 1018.001 0A9 9 0 003 12zm12 3l3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LifebuoyIcon;
/* prettier-ignore-end */
