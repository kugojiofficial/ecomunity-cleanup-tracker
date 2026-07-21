/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlaneTiltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlaneTiltIcon(props: PlaneTiltIconProps) {
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
          "M14.5 6.5l3-2.9a2.05 2.05 0 012.9 2.9l-2.9 3L20 17l-2.5 2.55L14 13l-3 3v3l-2 2-1.5-4.5L3 15l2-2h3l3-3-6.5-3.5L7 4l7.5 2.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlaneTiltIcon;
/* prettier-ignore-end */
