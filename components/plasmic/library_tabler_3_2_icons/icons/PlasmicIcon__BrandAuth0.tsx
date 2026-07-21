/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAuth0IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAuth0Icon(props: BrandAuth0IconProps) {
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
        d={"M12 14.5L6.5 18l2-6L4 8h6l2-5 2 5h6l-4.5 4 2 6-5.5-3.5z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.507 8.872L18.497 3H5.503L3.494 8.872c-1.242 3.593-.135 7.094 3.249 9.407L12 22l5.257-3.721c3.385-2.313 4.49-5.814 3.25-9.407z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAuth0Icon;
/* prettier-ignore-end */
