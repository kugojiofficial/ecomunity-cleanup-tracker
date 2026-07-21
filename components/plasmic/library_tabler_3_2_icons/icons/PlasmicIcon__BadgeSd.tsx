/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeSdIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeSdIcon(props: BadgeSdIconProps) {
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
        d={"M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 9v6h1a2 2 0 002-2v-2a2 2 0 00-2-2h-1zm-7 5.25c0 .414.336.75.75.75H9a1 1 0 001-1v-1a1 1 0 00-1-1H8a1 1 0 01-1-1v-1a1 1 0 011-1h1.25a.75.75 0 01.75.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BadgeSdIcon;
/* prettier-ignore-end */
