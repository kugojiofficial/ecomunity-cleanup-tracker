/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandVintedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandVintedIcon(props: BrandVintedIconProps) {
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
          "M11.028 6c0 7.695-.292 11.728 0 12 2.046-5 4.246-12.642 5.252-14.099.343-.497.768-.93 1.257-1.277.603-.39 1.292-.76 1.463-.575-.07 2.319-4.023 15.822-4.209 16.314a6.136 6.136 0 01-3.465 3.386c-3.213.78-3.429-.446-3.836-1.134C6.54 18.512 5.808 6.355 6.045 5c.05-.523.143-1.851 2.491-2 2.359-.354 2.547 1.404 2.492 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandVintedIcon;
/* prettier-ignore-end */
