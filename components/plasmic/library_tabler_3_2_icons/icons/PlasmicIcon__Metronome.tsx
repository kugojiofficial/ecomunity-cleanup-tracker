/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MetronomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MetronomeIcon(props: MetronomeIconProps) {
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
          "M14.153 8.188l-.72-3.236a2.493 2.493 0 00-4.867 0L5.541 18.566A2 2 0 007.493 21h7.014a2.002 2.002 0 001.952-2.434l-.524-2.357M11 18l9-13m-1 0a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MetronomeIcon;
/* prettier-ignore-end */
