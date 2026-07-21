/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignBottomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignBottomIcon(props: BoxAlignBottomIconProps) {
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
          "M4 14h16v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zm0-5v.01M4 4v.01M9 4v.01M15 4v.01M20 4v.01M20 9v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxAlignBottomIcon;
/* prettier-ignore-end */
