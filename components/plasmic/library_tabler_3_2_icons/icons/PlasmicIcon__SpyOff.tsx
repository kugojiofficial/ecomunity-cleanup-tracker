/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpyOffIcon(props: SpyOffIconProps) {
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
          "M3 11h8m4 0h6M5 11V7c0-.571.16-1.105.437-1.56M8 4h8a3 3 0 013 3v4M4 17a3 3 0 106 0 3 3 0 00-6 0zm10.88-2.123a3 3 0 104.239 4.247m.59-3.414a3.012 3.012 0 00-1.425-1.422M10 17h4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SpyOffIcon;
/* prettier-ignore-end */
