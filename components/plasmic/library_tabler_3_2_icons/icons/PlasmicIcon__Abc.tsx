/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AbcIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AbcIcon(props: AbcIconProps) {
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
          "M3 16v-6a2 2 0 114 0v6m-4-3h4m3-5v6m0 0a2 2 0 004 0v-1a2 2 0 00-4 0v1zm10.732-2A2 2 0 0017 13v1a2 2 0 003.726 1.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AbcIcon;
/* prettier-ignore-end */
