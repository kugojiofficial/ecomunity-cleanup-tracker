/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MacroIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MacroIcon(props: MacroIconProps) {
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
          "M6 15a6 6 0 1012 0m0 0a6 6 0 00-6 6m0 0a6 6 0 00-6-6m6 6V11m0 0a5 5 0 01-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 01-5 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MacroIcon;
/* prettier-ignore-end */
