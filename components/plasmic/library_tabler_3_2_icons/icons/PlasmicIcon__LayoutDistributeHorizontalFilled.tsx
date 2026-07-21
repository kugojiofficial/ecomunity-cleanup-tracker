/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutDistributeHorizontalFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function LayoutDistributeHorizontalFilledIcon(
  props: LayoutDistributeHorizontalFilledIconProps
) {
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
          "M20 3a1 1 0 110 2H4a1 1 0 010-2h16zm0 16a1 1 0 010 2H4a1 1 0 010-2h16zM16 8a3 3 0 013 3v2a3 3 0 01-3 3H8a3 3 0 01-3-3v-2a3 3 0 013-3h8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutDistributeHorizontalFilledIcon;
/* prettier-ignore-end */
