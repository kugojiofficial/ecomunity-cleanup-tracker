/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCtemplarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCtemplarIcon(props: BrandCtemplarIconProps) {
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
          "M6.04 14.831L10.5 10.5m2.055 10.32c4.55-3.456 7.582-8.639 8.426-14.405a1.669 1.669 0 00-.934-1.767A19.647 19.647 0 0012 3a19.647 19.647 0 00-8.047 1.647 1.668 1.668 0 00-.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.947.947 0 001.11 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20 5c-2 0-4.37 3.304-8 6.644C8.37 8.304 6 5 4 5m13.738 10L13.5 10.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCtemplarIcon;
/* prettier-ignore-end */
