/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FingerprintOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FingerprintOffIcon(props: FingerprintOffIconProps) {
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
          "M18.9 7a8 8 0 011.1 5v1a6 6 0 00.8 3M8 11c0-.848.264-1.634.713-2.28m2.4-1.621A4 4 0 0116 11v1m-4 0v1a14 14 0 002.5 8M8 15a18 18 0 001.8 6m-4.9-2a22 22 0 01-.9-7v-1a8 8 0 011.854-5.143M8.03 4.032A8 8 0 0116 4.05M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FingerprintOffIcon;
/* prettier-ignore-end */
