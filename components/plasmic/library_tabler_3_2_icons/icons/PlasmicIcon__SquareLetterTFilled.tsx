/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterTFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterTFilledIcon(props: SquareLetterTFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-5 5h-4a1 1 0 000 2h1v7a1 1 0 00.883.993L12 17a1 1 0 001-1V9h1a1 1 0 00.993-.883L15 8a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterTFilledIcon;
/* prettier-ignore-end */
