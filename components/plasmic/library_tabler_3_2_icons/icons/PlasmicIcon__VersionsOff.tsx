/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VersionsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VersionsOffIcon(props: VersionsOffIconProps) {
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
          "M10.184 6.162A2 2 0 0112 5h6a2 2 0 012 2v9m-1.185 2.827A1.994 1.994 0 0118 19h-6a2 2 0 01-2-2v-7M7 7v10M4 8v8M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VersionsOffIcon;
/* prettier-ignore-end */
