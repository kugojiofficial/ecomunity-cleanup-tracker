/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAngularIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAngularIcon(props: BrandAngularIconProps) {
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
          "M5.428 17.245l6.076 3.471a1 1 0 00.992 0l6.076-3.471a1.001 1.001 0 00.495-.734l1.323-9.704a1 1 0 00-.658-1.078l-7.4-2.612a1 1 0 00-.665 0L4.268 5.73a1 1 0 00-.658 1.078l1.323 9.704a1 1 0 00.495.733z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 15l3-8 3 8m-5-2h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAngularIcon;
/* prettier-ignore-end */
