/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPhpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPhpIcon(props: BrandPhpIconProps) {
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
          "M2 12c0 2.387 1.054 4.676 2.929 6.364C6.804 20.052 9.348 21 12 21s5.196-.948 7.071-2.636C20.946 16.676 22 14.387 22 12s-1.054-4.676-2.929-6.364C17.196 3.948 14.652 3 12 3s-5.196.948-7.071 2.636C3.054 7.324 2 9.613 2 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.5 15l.395-1.974L6.5 10h1.32a1 1 0 01.986 1.164l-.167 1a1 1 0 01-.986.836H6m9.5 2l.395-1.974L16.5 10h1.32a1 1 0 01.986 1.164l-.167 1a1 1 0 01-.986.836H16m-4-5.5L11 13m.6-3H14l-.5 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPhpIcon;
/* prettier-ignore-end */
