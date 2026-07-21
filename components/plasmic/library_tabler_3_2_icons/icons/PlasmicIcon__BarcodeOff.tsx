/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarcodeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarcodeOffIcon(props: BarcodeOffIconProps) {
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
          "M4 7V6c0-.552.224-1.052.586-1.414M4 17v1a2 2 0 002 2h2m8-16h2a2 2 0 012 2v1m-4 13h2c.551 0 1.05-.223 1.412-.584M5 11h1v2H5v-2zm5 0v2m5-2v.01m4-.01v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarcodeOffIcon;
/* prettier-ignore-end */
