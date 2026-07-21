/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterOFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterOFilledIcon(props: SquareLetterOFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5a3 3 0 00-3 3v4a3 3 0 006 0v-4a3 3 0 00-3-3zm0 2a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterOFilledIcon;
/* prettier-ignore-end */
