/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandNotionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandNotionIcon(props: BrandNotionIconProps) {
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
        d={"M11 17.5V11h.5l4 6h.5v-6.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.077 20.071l-11.53.887a1 1 0 01-.876-.397L4.2 17.267a1 1 0 01-.2-.6V5.926a1 1 0 01.923-.997l11.389-.876a2 2 0 011.262.33l1.535 1.023A2 2 0 0120 7.07v12.004a1 1 0 01-.923.997zM4.5 5.5L7 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20 7L7 8v12.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandNotionIcon;
/* prettier-ignore-end */
