/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBlackberryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBlackberryIcon(props: BrandBlackberryIconProps) {
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
          "M7 6a1 1 0 00-1-1H4l-.5 2H6a1 1 0 001-1zm-1 6a1 1 0 00-1-1H3l-.5 2H5a1 1 0 001-1zm7 0a1 1 0 00-1-1h-2l-.5 2H12a1 1 0 001-1zm1-6a1 1 0 00-1-1h-2l-.5 2H13a1 1 0 001-1zm-2 12a1 1 0 00-1-1H9l-.5 2H11a1 1 0 001-1zm8-3a1 1 0 00-1-1h-2l-.5 2H19a1 1 0 001-1zm1-6a1 1 0 00-1-1h-2l-.5 2H20a1 1 0 001-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBlackberryIcon;
/* prettier-ignore-end */
