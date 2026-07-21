/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandYoutubeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandYoutubeFilledIcon(props: BrandYoutubeFilledIconProps) {
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
          "M18 3a5 5 0 015 5v8a5 5 0 01-5 5H6a5 5 0 01-5-5V8a5 5 0 015-5h12zM9 9v6a1 1 0 001.514.857l5-3a.999.999 0 000-1.714l-5-3A1 1 0 009 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandYoutubeFilledIcon;
/* prettier-ignore-end */
