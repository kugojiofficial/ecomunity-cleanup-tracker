/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrekkingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrekkingIcon(props: TrekkingIconProps) {
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
        d={"M11 4a1 1 0 102 0 1 1 0 00-2 0zM7 21l2-4m4 4v-4l-3-3 1-6 3 4 3 2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 14l-1.827-1.218a2 2 0 01-.831-2.15l.28-1.117A2 2 0 019.561 8H11l4 1 3-2m-1 5v9m-1-1h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrekkingIcon;
/* prettier-ignore-end */
