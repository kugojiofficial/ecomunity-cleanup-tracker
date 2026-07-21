/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterBFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterBFilledIcon(props: SquareLetterBFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5h-2a1 1 0 00-1 1v8a1 1 0 001 1h2a3 3 0 003-3l-.005-.176a3 3 0 00-.654-1.7L14.235 12l.106-.124A3 3 0 0012 7zm0 6a1 1 0 010 2h-1v-2h1zm0-4a1 1 0 110 2h-1V9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterBFilledIcon;
/* prettier-ignore-end */
