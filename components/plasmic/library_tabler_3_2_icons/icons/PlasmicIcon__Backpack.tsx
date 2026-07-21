/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackpackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackpackIcon(props: BackpackIconProps) {
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
          "M5 18v-6a6 6 0 016-6h2a6 6 0 016 6v6a3 3 0 01-3 3H8a3 3 0 01-3-3zm5-12V5a2 2 0 114 0v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4m-4-11h2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BackpackIcon;
/* prettier-ignore-end */
