/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkOffIcon(props: BookmarkOffIconProps) {
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
          "M7.708 3.721A3.982 3.982 0 0110 3h4a4 4 0 014 4v7m0 4v3l-6-4-6 4V7c0-.308.035-.609.1-.897M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BookmarkOffIcon;
/* prettier-ignore-end */
