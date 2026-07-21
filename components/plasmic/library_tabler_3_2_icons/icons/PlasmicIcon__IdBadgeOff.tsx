/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IdBadgeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IdBadgeOffIcon(props: IdBadgeOffIconProps) {
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
          "M7.141 3.125A3 3 0 018 3h8a3 3 0 013 3v9m-.13 3.874A3 3 0 0116 21H8a3 3 0 01-3-3V6a3 3 0 01.128-.869m6.051 6.045a2.001 2.001 0 102.635 2.667M10 6h4M9 18h6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IdBadgeOffIcon;
/* prettier-ignore-end */
