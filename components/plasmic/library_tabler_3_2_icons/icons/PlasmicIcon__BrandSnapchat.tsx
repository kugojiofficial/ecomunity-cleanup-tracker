/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSnapchatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSnapchatIcon(props: BrandSnapchatIconProps) {
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
          "M3 15.961c4-2.118 4-4.118 1-7.118m17 7.118c-4-2.118-4-4.118-1-7.118m-3.118-1.001a4.882 4.882 0 00-9.764 0c0 4.273-.213 6.409-4.118 8.118 2 .882 2 .882 3 3 3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3-3.906-1.709-4.118-3.845-4.118-8.118z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSnapchatIcon;
/* prettier-ignore-end */
