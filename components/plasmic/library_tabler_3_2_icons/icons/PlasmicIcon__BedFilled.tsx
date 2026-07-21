/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BedFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BedFilledIcon(props: BedFilledIconProps) {
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
          "M3 6a1 1 0 01.993.883L4 7v6h6V8a1 1 0 01.883-.993L11 7h8a3 3 0 012.995 2.824L22 10v8a1 1 0 01-1.993.117L20 18v-3H4v3a1 1 0 01-1.993.117L2 18V7a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M7 8a2 2 0 11-1.995 2.15L5 10l.005-.15A2 2 0 017 8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BedFilledIcon;
/* prettier-ignore-end */
