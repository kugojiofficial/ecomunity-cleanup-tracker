/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CactusOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CactusOffIcon(props: CactusOffIconProps) {
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
          "M6 9v1a3 3 0 003 3h1m8-5v5a3 3 0 01-.129.872m-2.014 2a3 3 0 01-.857.124h-1M10 21V10m0-4V5a2 2 0 114 0v5m0 4v7m-7 0h10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CactusOffIcon;
/* prettier-ignore-end */
