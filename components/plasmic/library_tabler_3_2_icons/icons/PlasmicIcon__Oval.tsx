/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OvalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OvalIcon(props: OvalIconProps) {
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
          "M6 12c0 2.387.632 4.676 1.757 6.364C8.883 20.052 10.41 21 12 21c1.591 0 3.117-.948 4.243-2.636C17.368 16.676 18 14.387 18 12s-.632-4.676-1.757-6.364C15.117 3.948 13.59 3 12 3c-1.591 0-3.117.948-4.243 2.636C6.632 7.324 6 9.613 6 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OvalIcon;
/* prettier-ignore-end */
