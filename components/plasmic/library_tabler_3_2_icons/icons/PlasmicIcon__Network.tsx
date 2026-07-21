/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NetworkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NetworkIcon(props: NetworkIconProps) {
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
        d={"M6 9a6 6 0 1012 0A6 6 0 006 9z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 3c1.333.333 2 2.333 2 6s-.667 5.667-2 6m0-12c-1.333.333-2 2.333-2 6s.667 5.667 2 6M6 9h12M3 20h7m4 0h7m-11 0a2 2 0 104 0 2 2 0 00-4 0zm2-5v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NetworkIcon;
/* prettier-ignore-end */
