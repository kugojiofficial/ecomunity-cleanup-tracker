/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrowserOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrowserOffIcon(props: BrowserOffIconProps) {
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
          "M8 4h11a1 1 0 011 1v11m-.288 3.702A1 1 0 0119 20H5a1 1 0 01-1-1V5c0-.276.112-.526.293-.707M4 8h4m4 0h8M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrowserOffIcon;
/* prettier-ignore-end */
