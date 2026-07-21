/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BucketOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BucketOffIcon(props: BucketOffIconProps) {
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
          "M5.029 5.036C4.374 5.616 4 6.286 4 7c0 2.033 3.033 3.712 6.96 3.967m3.788-.21C17.812 10.198 20 8.728 20 7c0-2.21-3.582-4-8-4-1.605 0-3.1.236-4.352.643"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2c.1-.3.252-.812.457-1.535m.862-3.146c.262-.975.735-2.76 1.418-5.354A7.45 7.45 0 0020 7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BucketOffIcon;
/* prettier-ignore-end */
