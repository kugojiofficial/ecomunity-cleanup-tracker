/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGooglePodcastsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGooglePodcastsIcon(props: BrandGooglePodcastsIconProps) {
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
        d={"M12 3v2m0 14v2m0-13v8m-4 1v2m-4-8v2m16-2v2M8 5v8m8-6V5m0 14v-8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGooglePodcastsIcon;
/* prettier-ignore-end */
