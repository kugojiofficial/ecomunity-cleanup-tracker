/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkFilledIcon(props: BookmarkFilledIconProps) {
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
          "M14 2a5 5 0 015 5v14a1 1 0 01-1.555.832L12 18.202l-5.444 3.63a1 1 0 01-1.55-.72L5 21V7a5 5 0 015-5h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarkFilledIcon;
/* prettier-ignore-end */
