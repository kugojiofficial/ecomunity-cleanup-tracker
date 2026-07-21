/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartBubbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartBubbleIcon(props: ChartBubbleIconProps) {
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
          "M3 16a3 3 0 106 0 3 3 0 00-6 0zm11 3a2 2 0 104 0 2 2 0 00-4 0zM10 7.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartBubbleIcon;
/* prettier-ignore-end */
