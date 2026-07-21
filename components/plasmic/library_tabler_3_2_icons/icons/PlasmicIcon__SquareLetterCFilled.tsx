/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterCFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterCFilledIcon(props: SquareLetterCFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5a3 3 0 00-3 3v4a3 3 0 006 0 1 1 0 00-1.993-.117L13 14a1 1 0 01-2 0v-4a1 1 0 011.993-.117L13 10a1 1 0 002 0 3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterCFilledIcon;
/* prettier-ignore-end */
