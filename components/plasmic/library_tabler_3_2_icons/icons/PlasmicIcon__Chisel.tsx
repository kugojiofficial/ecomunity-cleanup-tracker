/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChiselIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChiselIcon(props: ChiselIconProps) {
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
          "M14 14l1.5 1.5m2.847.075l2.08 2.079a1.96 1.96 0 01-2.773 2.772l-2.08-2.079a1.96 1.96 0 012.773-2.772zM3 6l3-3 7.414 7.414A2 2 0 0114 11.828V14h-2.172a2 2 0 01-1.414-.586L3 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChiselIcon;
/* prettier-ignore-end */
