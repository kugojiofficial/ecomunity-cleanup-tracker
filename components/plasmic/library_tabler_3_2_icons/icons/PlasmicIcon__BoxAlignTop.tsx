/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignTopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignTopIcon(props: BoxAlignTopIconProps) {
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
          "M4 10.005h16v-5a1 1 0 00-1-1H5a1 1 0 00-1 1v5zm0 5v-.01m0 5.01v-.01m5 .01v-.01m6 .01v-.01m5 .01v-.01m0-4.99v-.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxAlignTopIcon;
/* prettier-ignore-end */
