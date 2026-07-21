/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSharikIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSharikIcon(props: BrandSharikIconProps) {
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
          "M4.281 16.606A8.968 8.968 0 015.644 5.629a9.033 9.033 0 0111.011-1.346C15.071 8.975 14.24 11.243 12 13c-1.584 1.242-3.836 2.24-7.719 3.606zM20.616 9.3c2.113 7.59-4.892 13.361-11.302 11.264 1.931-3.1 3.235-4.606 4.686-6.065 1.705-1.715 3.591-3.23 6.616-5.199z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSharikIcon;
/* prettier-ignore-end */
