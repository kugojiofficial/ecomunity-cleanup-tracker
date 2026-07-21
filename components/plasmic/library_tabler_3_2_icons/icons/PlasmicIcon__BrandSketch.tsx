/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSketchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSketchIcon(props: BrandSketchIconProps) {
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
          "M3.262 10.878l8 8.789c.4.44 1.091.44 1.491 0l8-8.79c.313-.344.349-.859.087-1.243L17.303 4.44a1 1 0 00-.823-.436H7.554a1 1 0 00-.823.436l-3.54 5.192c-.263.385-.227.901.087 1.246h-.016z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSketchIcon;
/* prettier-ignore-end */
