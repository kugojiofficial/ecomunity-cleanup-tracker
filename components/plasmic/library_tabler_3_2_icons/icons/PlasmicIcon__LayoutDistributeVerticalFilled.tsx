/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutDistributeVerticalFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function LayoutDistributeVerticalFilledIcon(
  props: LayoutDistributeVerticalFilledIconProps
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
          "M4 3a1 1 0 011 1v16a1 1 0 11-2 0V4a1 1 0 011-1zm16 0a1 1 0 011 1v16a1 1 0 01-2 0V4a1 1 0 011-1zm-7 2a3 3 0 013 3v8a3 3 0 01-3 3h-2a3 3 0 01-3-3V8a3 3 0 013-3h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutDistributeVerticalFilledIcon;
/* prettier-ignore-end */
