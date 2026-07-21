/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BorderStyleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BorderStyleIcon(props: BorderStyleIconProps) {
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
          "M4 20V6a2 2 0 012-2h14m0 4v.01M20 12v.01M20 16v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BorderStyleIcon;
/* prettier-ignore-end */
