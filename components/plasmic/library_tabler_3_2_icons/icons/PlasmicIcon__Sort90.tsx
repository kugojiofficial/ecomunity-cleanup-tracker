/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Sort90IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Sort90Icon(props: Sort90IconProps) {
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
          "M4 15a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1h3m8-2v4a2 2 0 004 0v-4a2 2 0 10-4 0zm-5 2h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Sort90Icon;
/* prettier-ignore-end */
