/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MeterCubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MeterCubeIcon(props: MeterCubeIconProps) {
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
          "M17 5h1.5a1.5 1.5 0 010 3m0 0H18m.5 0a1.5 1.5 0 010 3H17M4 12v6m0-4a2 2 0 012-2h.5A2.5 2.5 0 019 14.5V18m0-2.5v-1a2.5 2.5 0 015 0V18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MeterCubeIcon;
/* prettier-ignore-end */
