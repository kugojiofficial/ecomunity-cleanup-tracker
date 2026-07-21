/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScriptMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScriptMinusIcon(props: ScriptMinusIconProps) {
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
          "M17 19h4m-7 1H6a3 3 0 010-6h11a3 3 0 00-3 3m7-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScriptMinusIcon;
/* prettier-ignore-end */
