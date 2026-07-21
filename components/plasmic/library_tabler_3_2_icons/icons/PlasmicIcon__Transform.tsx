/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransformIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransformIcon(props: TransformIconProps) {
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
          "M3 6a3 3 0 106 0 3 3 0 00-6 0zm18 5V8a2 2 0 00-2-2h-6m0 0l3 3m-3-3l3-3M3 13v3a2 2 0 002 2h6m0 0l-3-3m3 3l-3 3m7-3a3 3 0 106 0 3 3 0 00-6 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransformIcon;
/* prettier-ignore-end */
