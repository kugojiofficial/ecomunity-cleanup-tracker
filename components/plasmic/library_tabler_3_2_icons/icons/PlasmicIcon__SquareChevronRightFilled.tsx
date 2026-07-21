/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareChevronRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareChevronRightFilledIcon(
  props: SquareChevronRightFilledIconProps
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7.387 6.21a1 1 0 00-1.32.083l-.083.094a1 1 0 00.083 1.32L12.585 12l-2.292 2.293-.083.094a1 1 0 001.497 1.32l3-3 .083-.094a1 1 0 00-.083-1.32l-3-3-.094-.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareChevronRightFilledIcon;
/* prettier-ignore-end */
