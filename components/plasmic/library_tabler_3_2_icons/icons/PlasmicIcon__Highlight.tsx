/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HighlightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HighlightIcon(props: HighlightIconProps) {
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
          "M3 19h4L17.5 8.5a2.829 2.829 0 00-4-4L3 15v4zm9.5-13.5l4 4m-12 4l4 4M21 15v4h-8l4-4h4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HighlightIcon;
/* prettier-ignore-end */
