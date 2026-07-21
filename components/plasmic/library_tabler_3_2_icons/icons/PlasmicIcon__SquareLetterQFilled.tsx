/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterQFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterQFilledIcon(props: SquareLetterQFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5a3 3 0 00-3 3v4a3 3 0 004.168 2.764l.125-.057a1 1 0 001.414-1.414l.057-.125A3 3 0 0015 14v-4a3 3 0 00-3-3zm1 7.001h-.059a.996.996 0 00-.941 1A1 1 0 0111 14v-4a1 1 0 012 0v4.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterQFilledIcon;
/* prettier-ignore-end */
