/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandNodejsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandNodejsIcon(props: BrandNodejsIconProps) {
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
          "M9 9v8.044a2 2 0 01-2.996 1.734l-1.568-.9A3 3 0 013 15.317V8.682a3 3 0 011.436-2.56l6-3.667a3 3 0 013.128 0l6 3.667A3 3 0 0121 8.683v6.634a3 3 0 01-1.436 2.56l-6 3.667a3 3 0 01-3.128 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17 9h-3.5a1.5 1.5 0 000 3h2a1.5 1.5 0 110 3H12"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandNodejsIcon;
/* prettier-ignore-end */
