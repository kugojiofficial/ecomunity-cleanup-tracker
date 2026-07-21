/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandSanitizerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandSanitizerIcon(props: HandSanitizerIconProps) {
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
          "M7 21h10V11a3 3 0 00-3-3h-4a3 3 0 00-3 3v10zm8-18H9a2 2 0 00-2 2m5-2v5m0 3v4m-2-2h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HandSanitizerIcon;
/* prettier-ignore-end */
