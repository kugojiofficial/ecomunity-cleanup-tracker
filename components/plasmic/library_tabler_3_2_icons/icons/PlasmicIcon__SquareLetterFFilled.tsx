/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterFFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterFFilledIcon(props: SquareLetterFFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-5 5h-4a1 1 0 00-1 1v8a1 1 0 001 1l.117-.007A1 1 0 0011 16v-3h2a1 1 0 00.993-.883L14 12a1 1 0 00-1-1h-2V9h3a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterFFilledIcon;
/* prettier-ignore-end */
