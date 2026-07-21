/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IdOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IdOffIcon(props: IdOffIconProps) {
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
          "M8 4h10a3 3 0 013 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 01-3-3V7c0-1.083.573-2.031 1.433-2.559m3.742 3.737a2 2 0 102.646 2.65M15 8h2m-1 4h1M7 16h9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IdOffIcon;
/* prettier-ignore-end */
