/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutAlignLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutAlignLeftIcon(props: LayoutAlignLeftIconProps) {
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
          "M4 4v16m4-9a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayoutAlignLeftIcon;
/* prettier-ignore-end */
