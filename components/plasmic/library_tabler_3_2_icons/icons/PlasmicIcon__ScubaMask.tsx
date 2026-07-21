/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScubaMaskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScubaMaskIcon(props: ScubaMaskIconProps) {
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
          "M4 7h12a1 1 0 011 1v4.5a2.5 2.5 0 01-2.5 2.5H14a2 2 0 01-2-2 2 2 0 00-4 0 2 2 0 01-2 2h-.5A2.5 2.5 0 013 12.5V8a1 1 0 011-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 17a2 2 0 002 2h3.5a5.5 5.5 0 005.5-5.5V4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScubaMaskIcon;
/* prettier-ignore-end */
