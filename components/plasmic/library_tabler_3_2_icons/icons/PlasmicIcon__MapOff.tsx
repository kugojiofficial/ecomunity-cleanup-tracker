/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapOffIcon(props: MapOffIconProps) {
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
          "M8.32 4.34L9 4l6 3 6-3v13m-2.67 1.335L15 20l-6-3-6 3V7l2.665-1.333M9 4v1m0 4v8m6-10v4m0 4v5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MapOffIcon;
/* prettier-ignore-end */
