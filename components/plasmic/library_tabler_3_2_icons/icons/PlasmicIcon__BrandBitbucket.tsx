/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBitbucketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBitbucketIcon(props: BrandBitbucketIconProps) {
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
          "M3.648 4a.64.64 0 00-.64.744l3.14 14.528c.07.417.43.724.852.728h10a.644.644 0 00.642-.539l3.35-14.71a.64.64 0 00-.64-.744L3.648 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M14 15h-4L9 9h6l-1 6z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBitbucketIcon;
/* prettier-ignore-end */
