/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedLetterNFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedLetterNFilledIcon(
  props: SquareRoundedLetterNFilledIconProps
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
          "M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999zm-.782 5.552C10.423 6.609 9 6.945 9 8v8a1 1 0 001 1l.117-.007A1 1 0 0011 16v-3.764l2.106 4.211c.471.944 1.894.608 1.894-.447V8a1 1 0 00-1-1l-.117.007A1 1 0 0013 8v3.764l-2.106-4.211z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedLetterNFilledIcon;
/* prettier-ignore-end */
