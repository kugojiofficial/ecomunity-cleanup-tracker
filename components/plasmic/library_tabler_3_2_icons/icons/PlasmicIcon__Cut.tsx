/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CutIcon(props: CutIconProps) {
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
          "M4 17a3 3 0 106 0 3 3 0 00-6 0zm10 0a3 3 0 106 0 3 3 0 00-6 0zm-4.85-2.15L18 4M6 4l8.85 10.85"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CutIcon;
/* prettier-ignore-end */
