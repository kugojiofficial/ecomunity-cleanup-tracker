/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandFlipboardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandFlipboardIcon(props: BrandFlipboardIconProps) {
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
          "M3.973 3h16.054c.537 0 .973.436.973.973v4.052a.973.973 0 01-.973.973h-5.025v4.831c0 .648-.525 1.173-1.173 1.173H9v5.025a.973.973 0 01-.974.973H3.973A.973.973 0 013 20.027V3.973C3 3.436 3.436 3 3.973 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandFlipboardIcon;
/* prettier-ignore-end */
