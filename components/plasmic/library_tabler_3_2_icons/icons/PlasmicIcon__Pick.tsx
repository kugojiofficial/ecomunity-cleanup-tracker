/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PickIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PickIcon(props: PickIconProps) {
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
          "M13 8l-9.383 9.418a2.09 2.09 0 000 2.967 2.11 2.11 0 002.976 0L16 11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 3h4.586a1 1 0 01.707.293l6.414 6.414a1 1 0 01.293.707V15a2 2 0 01-4 0v-3l-5-5H9a2 2 0 110-4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PickIcon;
/* prettier-ignore-end */
