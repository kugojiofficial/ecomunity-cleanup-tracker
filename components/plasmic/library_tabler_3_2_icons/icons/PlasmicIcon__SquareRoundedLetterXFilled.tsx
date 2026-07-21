/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedLetterXFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedLetterXFilledIcon(
  props: SquareRoundedLetterXFilledIconProps
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
          "M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999zm2.771 5.105a1 1 0 00-1.341.447L12 9.763l-1.106-2.21a1 1 0 00-1.234-.494l-.107.047a1 1 0 00-.447 1.341L10.88 12l-1.775 3.553a1 1 0 00.345 1.283l.102.058a1 1 0 001.341-.447L12 14.236l1.106 2.211a1 1 0 001.234.494l.107-.047a1 1 0 00.447-1.341L13.118 12l1.776-3.553a1 1 0 00-.345-1.283l-.102-.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedLetterXFilledIcon;
/* prettier-ignore-end */
