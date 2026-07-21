/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeIcon(props: SwipeIconProps) {
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
          "M15 16.572v2.42A2.01 2.01 0 0112.991 21H5.01A2.01 2.01 0 013 18.991V11.01A2.01 2.01 0 015.009 9h2.954"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.167 4.511a2.04 2.04 0 012.496-1.441l7.826 2.097a2.04 2.04 0 011.441 2.496l-2.097 7.826a2.04 2.04 0 01-2.496 1.441L8.51 14.833a2.04 2.04 0 01-1.441-2.496l2.098-7.826z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SwipeIcon;
/* prettier-ignore-end */
