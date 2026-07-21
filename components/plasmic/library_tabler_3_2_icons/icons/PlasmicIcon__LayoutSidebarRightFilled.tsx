/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutSidebarRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutSidebarRightFilledIcon(
  props: LayoutSidebarRightFilledIconProps
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
          "M6 21a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6zm8-16H6a1 1 0 00-1 1v12a1 1 0 001 1h8V5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutSidebarRightFilledIcon;
/* prettier-ignore-end */
