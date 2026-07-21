/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandFingerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandFingerOffIcon(props: HandFingerOffIconProps) {
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
          "M8 13V8m.06-3.923A1.5 1.5 0 0111 4.5V7m0 4v1m1.063-3.935A1.5 1.5 0 0114 9.5v.5m.06.082A1.5 1.5 0 0117 10.5V12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 11.5a1.5 1.5 0 113 0V16m-.88 3.129A6 6 0 0114 22h-2 .208a6 6 0 01-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 01.536-2.022 1.867 1.867 0 012.28.28L8 13M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HandFingerOffIcon;
/* prettier-ignore-end */
