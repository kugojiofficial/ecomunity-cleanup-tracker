/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlassGinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlassGinIcon(props: GlassGinIconProps) {
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
          "M8 21h8m-4-6v6M5.5 5c0 .53.685 1.04 1.904 1.414C8.623 6.79 10.276 7 12 7c1.724 0 3.377-.21 4.596-.586C17.816 6.04 18.5 5.53 18.5 5c0-.53-.685-1.04-1.904-1.414C15.377 3.21 13.724 3 12 3c-1.724 0-3.377.21-4.596.586C6.184 3.96 5.5 4.47 5.5 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.75 4.5C5.138 5.25 5 6.5 5 8a7 7 0 1014 0c0-1.5-.094-2.75-.75-3.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GlassGinIcon;
/* prettier-ignore-end */
