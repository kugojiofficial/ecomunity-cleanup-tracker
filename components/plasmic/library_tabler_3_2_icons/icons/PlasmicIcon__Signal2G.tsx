/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Signal2GIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Signal2GIcon(props: Signal2GIconProps) {
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
          "M19 8h-3a2 2 0 00-2 2v4a2 2 0 002 2h3v-4h-1M5 8h4a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 00-1 1v2a1 1 0 001 1h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Signal2GIcon;
/* prettier-ignore-end */
