/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Sort09IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Sort09Icon(props: Sort09IconProps) {
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
          "M11 12h2m-9-2v4a2 2 0 004 0v-4a2 2 0 10-4 0zm12 5a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Sort09Icon;
/* prettier-ignore-end */
