/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandApplePodcastIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandApplePodcastIcon(props: BrandApplePodcastIconProps) {
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
          "M18.364 18.364a9 9 0 10-12.728 0M11.766 22h.468a2 2 0 001.985-1.752l.5-4A2 2 0 0012.734 14h-1.468a2 2 0 00-1.985 2.248l.5 4A2 2 0 0011.766 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 9a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandApplePodcastIcon;
/* prettier-ignore-end */
