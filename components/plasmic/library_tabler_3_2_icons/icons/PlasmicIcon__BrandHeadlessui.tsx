/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandHeadlessuiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandHeadlessuiIcon(props: BrandHeadlessuiIconProps) {
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
          "M6.744 4.325l7.82-1.267a4.456 4.456 0 015.111 3.686l1.267 7.82a4.456 4.456 0 01-3.686 5.111l-7.82 1.267a4.456 4.456 0 01-5.111-3.686l-1.267-7.82a4.456 4.456 0 013.686-5.111z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.252 7.704l7.897-1.28a1 1 0 011.147.828l.36 2.223-9.562 3.51-.67-4.134a1 1 0 01.828-1.147z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandHeadlessuiIcon;
/* prettier-ignore-end */
