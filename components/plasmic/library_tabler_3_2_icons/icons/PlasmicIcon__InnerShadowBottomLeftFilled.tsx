/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InnerShadowBottomLeftFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function InnerShadowBottomLeftFilledIcon(
  props: InnerShadowBottomLeftFilledIconProps
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-6 9a1 1 0 00-1 1 7 7 0 007 7 1 1 0 000-2 5 5 0 01-5-5 1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InnerShadowBottomLeftFilledIcon;
/* prettier-ignore-end */
