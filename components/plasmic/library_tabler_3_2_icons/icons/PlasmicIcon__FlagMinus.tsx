/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagMinusIcon(props: FlagMinusIconProps) {
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
          "M14.373 15.301A4.978 4.978 0 0112 14a5 5 0 00-7 0V5a5 5 0 017 0 5 5 0 007 0v9M5 21v-7m11 5h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlagMinusIcon;
/* prettier-ignore-end */
