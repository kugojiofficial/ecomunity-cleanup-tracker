/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LibraryPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LibraryPlusIcon(props: LibraryPlusIconProps) {
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
          "M7 5.667A2.667 2.667 0 019.667 3h8.666A2.667 2.667 0 0121 5.667v8.666A2.668 2.668 0 0118.333 17H9.667A2.667 2.667 0 017 14.333V5.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.012 7.26A2.005 2.005 0 003 8.997v10c0 1.1.9 2 2 2h10c.75 0 1.158-.385 1.5-1M11 10h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LibraryPlusIcon;
/* prettier-ignore-end */
