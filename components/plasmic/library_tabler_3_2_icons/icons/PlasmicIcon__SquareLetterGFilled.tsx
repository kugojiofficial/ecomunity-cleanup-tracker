/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterGFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterGFilledIcon(props: SquareLetterGFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-5 5h-2a3 3 0 00-3 3v4a3 3 0 003 3h2a1 1 0 001-1v-4a1 1 0 00-1-1h-1a1 1 0 00-1 1l.007.117A1 1 0 0013 13v2h-1a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterGFilledIcon;
/* prettier-ignore-end */
