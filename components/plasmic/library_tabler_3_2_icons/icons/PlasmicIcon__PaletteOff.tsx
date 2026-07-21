/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaletteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaletteOffIcon(props: PaletteOffIconProps) {
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
          "M15 15h-1a2 2 0 00-1 3.75A1.3 1.3 0 0112 21 9 9 0 015.628 5.644M8 4c1.236-.623 2.569-1 4-1 4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.518 4.518 0 01-1.127.73"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.5 10.5a1 1 0 102 0 1 1 0 00-2 0zm4-3a1 1 0 102 0 1 1 0 00-2 0zm4 3a1 1 0 102 0 1 1 0 00-2 0zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PaletteOffIcon;
/* prettier-ignore-end */
