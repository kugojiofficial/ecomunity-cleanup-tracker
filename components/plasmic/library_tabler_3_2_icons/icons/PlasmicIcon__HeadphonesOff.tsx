/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeadphonesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeadphonesOffIcon(props: HeadphonesOffIconProps) {
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
          "M3 3l18 18M4 15a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3zm13-2h1a2 2 0 012 2v1m-.589 3.417c-.361.36-.86.583-1.411.583h-1a2 2 0 01-2-2v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4 15v-3c0-2.21.896-4.21 2.344-5.658m2.369-1.638A8 8 0 0120 12v3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HeadphonesOffIcon;
/* prettier-ignore-end */
