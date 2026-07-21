/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareXFilledIcon(props: SquareXFilledIconProps) {
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
          "M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM9.613 8.21l.094.083L12 10.585l2.293-2.292a1 1 0 011.497 1.32l-.083.094L13.415 12l2.292 2.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415l-2.293 2.292a1 1 0 01-1.497-1.32l.083-.094L10.585 12 8.293 9.707a1 1 0 011.32-1.497z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareXFilledIcon;
/* prettier-ignore-end */
