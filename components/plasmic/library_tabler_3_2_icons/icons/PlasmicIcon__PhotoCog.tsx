/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoCogIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoCogIcon(props: PhotoCogIconProps) {
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
        d={"M15 8h.01M12 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 16l5-5c.928-.893 2.072-.893 3 0l3 3m0 0l1-1c.48-.461 1.016-.684 1.551-.67m.45 6.67a2 2 0 104 0 2 2 0 00-4 0zm2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoCogIcon;
/* prettier-ignore-end */
