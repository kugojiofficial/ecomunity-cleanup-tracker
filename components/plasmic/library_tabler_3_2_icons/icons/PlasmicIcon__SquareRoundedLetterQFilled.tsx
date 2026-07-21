/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedLetterQFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedLetterQFilledIcon(
  props: SquareRoundedLetterQFilledIconProps
) {
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
          "M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999zM12 7a3 3 0 00-3 3v4a3 3 0 004.168 2.764l.125-.057a1 1 0 001.414-1.414l.057-.125A3 3 0 0015 14v-4a3 3 0 00-3-3zm1 7.001h-.059a.996.996 0 00-.941 1A1 1 0 0111 14v-4a1 1 0 012 0v4.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedLetterQFilledIcon;
/* prettier-ignore-end */
