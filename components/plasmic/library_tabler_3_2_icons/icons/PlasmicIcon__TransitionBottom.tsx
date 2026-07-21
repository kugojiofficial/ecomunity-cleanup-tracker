/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionBottomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionBottomIcon(props: TransitionBottomIconProps) {
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
          "M21 18a3 3 0 01-3 3H6a3 3 0 01-3-3M3 6a3 3 0 013-3h12a3 3 0 010 6H6a3 3 0 01-3-3zm9 3v8m-3-3l3 3 3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransitionBottomIcon;
/* prettier-ignore-end */
