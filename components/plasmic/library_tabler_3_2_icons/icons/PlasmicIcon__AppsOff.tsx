/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppsOffIcon(props: AppsOffIconProps) {
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
          "M8 4h1a1 1 0 011 1v1m-.29 3.704A1 1 0 019 10H5a1 1 0 01-1-1V5c0-.276.111-.525.292-.706M18 14h1a1 1 0 011 1v1m-.29 3.704A.998.998 0 0119 20h-4a1 1 0 01-1-1v-4c0-.276.111-.525.292-.706M4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-8h6m-3-3v6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AppsOffIcon;
/* prettier-ignore-end */
