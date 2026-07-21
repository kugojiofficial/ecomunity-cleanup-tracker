/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RainbowOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RainbowOffIcon(props: RainbowOffIconProps) {
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
          "M22 17c0-5.523-4.477-10-10-10-.308 0-.613.014-.914.041m-3.208.845A10 10 0 002 17m9.088-5.931A6 6 0 006 17m8 0a2 2 0 00-4 0M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RainbowOffIcon;
/* prettier-ignore-end */
