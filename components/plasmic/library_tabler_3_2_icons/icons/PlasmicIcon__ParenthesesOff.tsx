/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ParenthesesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ParenthesesOffIcon(props: ParenthesesOffIconProps) {
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
          "M5.743 5.745A12.253 12.253 0 007 20M17 4a12.25 12.25 0 012.474 11.467m-1.22 2.794A12.28 12.28 0 0117 20M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ParenthesesOffIcon;
/* prettier-ignore-end */
