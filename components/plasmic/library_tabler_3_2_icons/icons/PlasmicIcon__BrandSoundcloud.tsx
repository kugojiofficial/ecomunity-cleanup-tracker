/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSoundcloudIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSoundcloudIcon(props: BrandSoundcloudIconProps) {
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
          "M17 11h1c1.38 0 3 1.274 3 3 0 1.657-1.5 3-3 3h-6V7c3 0 4.5 1.5 5 4zM9 8v9m-3 0v-7m-3 6v-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSoundcloudIcon;
/* prettier-ignore-end */
