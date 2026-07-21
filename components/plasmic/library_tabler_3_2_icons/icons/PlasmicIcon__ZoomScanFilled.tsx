/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomScanFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomScanFilledIcon(props: ZoomScanFilledIconProps) {
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
          "M4 15a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 010 2H6a3 3 0 01-3-3v-2a1 1 0 011-1zm16 0a1 1 0 011 1v2a3 3 0 01-3 3h-2a1 1 0 010-2h2a1 1 0 001-1v-2a1 1 0 011-1zm-9-8a4 4 0 013.446 6.031l2.261 2.262a1 1 0 01-1.414 1.414l-2.262-2.26-.031.017A4 4 0 017 11l.005-.2A4 4 0 0111 7zM8 3a1 1 0 010 2H6a1 1 0 00-1 1v2a1 1 0 01-2 0V6a3 3 0 013-3h2zm10 0a3 3 0 013 3v2a1 1 0 01-2 0V6a1 1 0 00-1-1h-2a1 1 0 110-2h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomScanFilledIcon;
/* prettier-ignore-end */
