/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayersLinkedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayersLinkedIcon(props: LayersLinkedIconProps) {
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
          "M19 8.268A2 2 0 0120 10v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8a2 2 0 012-2h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 15.734A2 2 0 014 14V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayersLinkedIcon;
/* prettier-ignore-end */
