/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandWechatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandWechatIcon(props: BrandWechatIconProps) {
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
          "M16.5 10c3.038 0 5.5 2.015 5.5 4.5 0 1.397-.778 2.645-2 3.47V20l-1.964-1.178A6.647 6.647 0 0116.5 19c-3.038 0-5.5-2.015-5.5-4.5s2.462-4.5 5.5-4.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.197 15.698c-.69.196-1.43.302-2.197.302a8.01 8.01 0 01-2.612-.432L4 17v-2.801C2.763 13.117 2 11.635 2 10c0-3.314 3.134-6 7-6 3.782 0 6.863 2.57 7 5.785v.233M10 8h.01M7 8h.01M15 14h.01M18 14h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandWechatIcon;
/* prettier-ignore-end */
