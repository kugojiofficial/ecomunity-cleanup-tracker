/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SprayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SprayIcon(props: SprayIconProps) {
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
          "M4 12a2 2 0 012-2h4a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7zm2-2V6a1 1 0 011-1h2a1 1 0 011 1v4m5-3h.01M18 9h.01M18 5h.01M21 3h.01M21 7h.01M21 11h.01M10 7h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SprayIcon;
/* prettier-ignore-end */
