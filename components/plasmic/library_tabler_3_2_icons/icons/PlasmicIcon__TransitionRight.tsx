/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionRightIcon(props: TransitionRightIconProps) {
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
          "M18 3a3 3 0 013 3v12a3 3 0 01-3 3M3 18V6a3 3 0 116 0v12a3 3 0 01-6 0zm6-6h8m-3 3l3-3-3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransitionRightIcon;
/* prettier-ignore-end */
