/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAo3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAo3Icon(props: BrandAo3IconProps) {
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
        d={"M2 5c7.109 4.1 10.956 10.131 12 14 1.074-4.67 4.49-8.94 8-11"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 8a2 2 0 104 0 2 2 0 00-4 0zM7 9c-.278 5.494-2.337 7.33-4 10 4.013-2 6.02-5 15.05-5 4.012 0 3.51 2.5 1 3 2 .5 2.508 5-2.007 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAo3Icon;
/* prettier-ignore-end */
