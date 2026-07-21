/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterRFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterRFilledIcon(props: SquareLetterRFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5h-2a1 1 0 00-1 1v8a1 1 0 001 1l.117-.007A1 1 0 0011 16v-2.332l2.2 2.932a1 1 0 001.4.2l.096-.081A1 1 0 0014.8 15.4l-1.903-2.538.115-.037A3.001 3.001 0 0012 7zm0 2a1 1 0 110 2h-1V9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterRFilledIcon;
/* prettier-ignore-end */
