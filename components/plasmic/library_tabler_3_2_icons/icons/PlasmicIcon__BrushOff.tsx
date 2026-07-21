/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrushOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrushOffIcon(props: BrushOffIconProps) {
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
        d={"M3 17a4 4 0 114 4H3v-4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M21 3a16 16 0 00-9.309 4.704M9.896 9.916A15.993 15.993 0 008.2 13.2M21 3a16 16 0 01-4.697 9.302m-2.195 1.786A15.991 15.991 0 0110.8 15.8M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrushOffIcon;
/* prettier-ignore-end */
