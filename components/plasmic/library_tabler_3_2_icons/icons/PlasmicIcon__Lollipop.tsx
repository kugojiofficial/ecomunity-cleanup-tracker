/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LollipopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LollipopIcon(props: LollipopIconProps) {
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
          "M7 10a7 7 0 1014 0 7 7 0 00-14 0zm14 0a3.5 3.5 0 10-7 0m0 0a3.5 3.5 0 11-7 0m7 7a3.5 3.5 0 100-7m0-7a3.5 3.5 0 100 7M3 21l6-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LollipopIcon;
/* prettier-ignore-end */
