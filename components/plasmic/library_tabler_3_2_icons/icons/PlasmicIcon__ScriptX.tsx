/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScriptXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScriptXIcon(props: ScriptXIconProps) {
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
          "M14 20H6a3 3 0 010-6h11a3 3 0 00-3 3m7-3V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8m10 3l4 4m0-4l-4 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScriptXIcon;
/* prettier-ignore-end */
