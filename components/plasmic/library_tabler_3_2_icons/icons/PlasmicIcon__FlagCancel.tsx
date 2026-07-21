/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagCancelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagCancelIcon(props: FlagCancelIconProps) {
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
          "M13.342 14.941A4.994 4.994 0 0112 14a5 5 0 00-7 0V5a5 5 0 017 0 5 5 0 007 0v7M5 21v-7m11 5a3 3 0 106 0 3 3 0 00-6 0zm1 2l4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlagCancelIcon;
/* prettier-ignore-end */
