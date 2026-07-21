/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NfcOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NfcOffIcon(props: NfcOffIconProps) {
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
        d={"M11 20a3 3 0 01-3-3V8m5-4a3 3 0 013 3v5m0 4v2l-5-5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 4h9a3 3 0 013 3v9m-.873 3.116A2.989 2.989 0 0117 20H7a3 3 0 01-3-3V7c0-.83.337-1.582.882-2.125M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NfcOffIcon;
/* prettier-ignore-end */
