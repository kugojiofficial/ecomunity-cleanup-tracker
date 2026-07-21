/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackpackOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackpackOffIcon(props: BackpackOffIconProps) {
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
          "M10 6h3a6 6 0 016 6v3m-.129 3.872A3 3 0 0116 21H8a3 3 0 01-3-3v-6a5.99 5.99 0 012.285-4.712M10 6V5a2 2 0 114 0v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BackpackOffIcon;
/* prettier-ignore-end */
