/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldSearchIcon(props: WorldSearchIconProps) {
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
          "M21 12a9 9 0 10-9 9M3.6 9h16.8M3.6 15h7.9m0-12a17 17 0 000 18m1-18a16.984 16.984 0 012.574 8.62"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 18a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldSearchIcon;
/* prettier-ignore-end */
