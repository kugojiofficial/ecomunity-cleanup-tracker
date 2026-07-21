/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedLetterRFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedLetterRFilledIcon(
  props: SquareRoundedLetterRFilledIconProps
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
          "M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999zM12 7h-2a1 1 0 00-1 1v8a1 1 0 001 1l.117-.007A1 1 0 0011 16v-2.332l2.2 2.932a1 1 0 001.4.2l.096-.081A1 1 0 0014.8 15.4l-1.903-2.538.115-.037A3.001 3.001 0 0012 7zm0 2a1 1 0 110 2h-1V9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedLetterRFilledIcon;
/* prettier-ignore-end */
