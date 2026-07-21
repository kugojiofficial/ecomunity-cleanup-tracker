/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomExclamationFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomExclamationFilledIcon(
  props: ZoomExclamationFilledIconProps
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
          "M14 3.072a8 8 0 012.32 11.834l5.387 5.387a1 1 0 01-1.414 1.414l-5.388-5.387A8 8 0 012 10l.005-.285A8 8 0 0114 3.072zM10 12a1 1 0 00-1 1l.007.127A1 1 0 0011 13.01l-.007-.127A1 1 0 0010 12zm0-6a1 1 0 00-1 1v3a1 1 0 102 0V7a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomExclamationFilledIcon;
/* prettier-ignore-end */
