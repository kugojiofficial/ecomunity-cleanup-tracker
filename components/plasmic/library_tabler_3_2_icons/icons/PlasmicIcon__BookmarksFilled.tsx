/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarksFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarksFilledIcon(props: BookmarksFilledIconProps) {
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
          "M12 6a4 4 0 014 4v11a1 1 0 01-1.514.857L10 19.166l-4.486 2.691a1 1 0 01-1.508-.743L4 21V10a4 4 0 014-4h4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M16 2a4 4 0 014 4v11a1 1 0 01-2 0V6a2 2 0 00-2-2h-5a1 1 0 110-2h5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarksFilledIcon;
/* prettier-ignore-end */
