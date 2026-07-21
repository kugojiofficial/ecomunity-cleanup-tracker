/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RepeatOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RepeatOffIcon(props: RepeatOffIconProps) {
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
          "M4 12V9a3 3 0 012.08-2.856M10 6h10m0 0l-3-3m3 3l-3 3m3 3v3a3 3 0 01-.133.886m-1.99 1.984c-.284.086-.58.13-.877.13H4m0 0l3 3m-3-3l3-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RepeatOffIcon;
/* prettier-ignore-end */
