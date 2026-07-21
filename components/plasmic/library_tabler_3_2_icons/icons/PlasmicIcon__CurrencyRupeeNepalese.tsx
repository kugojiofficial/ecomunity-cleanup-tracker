/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyRupeeNepaleseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyRupeeNepaleseIcon(
  props: CurrencyRupeeNepaleseIconProps
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
          "M15 5H4h3a4 4 0 010 8H4l6 6m11-2l-4.586-4.414a2 2 0 00-2.828 2.828l.707.707"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyRupeeNepaleseIcon;
/* prettier-ignore-end */
