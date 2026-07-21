/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutIcon(props: LayoutIconProps) {
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
          "M4 6a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 9a2 2 0 012-2h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3zm10-9a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayoutIcon;
/* prettier-ignore-end */
