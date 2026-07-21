/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartArrowsVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartArrowsVerticalIcon(props: ChartArrowsVerticalIconProps) {
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
          "M18 21V7m-9 8l3-3 3 3m0-5l3-3 3 3M3 21h18m-9 0v-9M3 6l3-3 3 3M6 21V3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartArrowsVerticalIcon;
/* prettier-ignore-end */
