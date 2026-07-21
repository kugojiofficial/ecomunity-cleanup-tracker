/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookOffIcon(props: BookOffIconProps) {
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
          "M3 19a9 9 0 019 0 9 9 0 015.899-1.096M3 6a9 9 0 012.114-.884m3.8-.21C9.984 5.076 11.03 5.44 12 6a9 9 0 019 0M3 6v13m9-13v2m0 4v7m9-13v11M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BookOffIcon;
/* prettier-ignore-end */
