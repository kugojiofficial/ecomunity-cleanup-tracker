/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GhostOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GhostOffIcon(props: GhostOffIconProps) {
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
          "M8.794 4.776A7 7 0 0119 11v4m-.12 3.898a1.779 1.779 0 01-2.98.502 1.651 1.651 0 00-2.6 0 1.651 1.651 0 01-2.6 0 1.651 1.651 0 00-2.6 0A1.78 1.78 0 015 18v-7c0-1.683.594-3.227 1.583-4.434M14 10h.01M10 14a3.5 3.5 0 004 0M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GhostOffIcon;
/* prettier-ignore-end */
