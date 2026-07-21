/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LicenseOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LicenseOffIcon(props: LicenseOffIconProps) {
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
          "M15 21H6a3 3 0 01-3-3v-1h10v2a2 2 0 002 2zm0 0a2 2 0 002-2v-2m0-4V5a2 2 0 112 2h-2m2-4H8a3 3 0 00-.864.126M5.122 5.151A3 3 0 005 6v11m6-10h2m-4 4h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LicenseOffIcon;
/* prettier-ignore-end */
