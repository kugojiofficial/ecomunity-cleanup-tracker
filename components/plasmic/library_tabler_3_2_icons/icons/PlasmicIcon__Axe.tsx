/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AxeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AxeIcon(props: AxeIconProps) {
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
          "M13 9l7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 01-2.976 0L10 12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.66 15.66l-3.32-3.32a1.25 1.25 0 01.42-2.044L7 9l6-6 3 3-6 6-1.296 3.24a1.25 1.25 0 01-2.044.42z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AxeIcon;
/* prettier-ignore-end */
