/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomCodeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomCodeFilledIcon(props: ZoomCodeFilledIconProps) {
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
          "M14 3.072a8 8 0 012.32 11.834l5.387 5.387a1 1 0 01-1.414 1.414l-5.388-5.387A8 8 0 012 10l.005-.285A8 8 0 0114 3.072zm-5.293 4.22a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.415l2 2a1 1 0 001.414 0l.083-.094a1 1 0 00-.083-1.32L7.415 10l1.292-1.293a1 1 0 000-1.414m4 0a1 1 0 00-1.414 0l-.083.095a1 1 0 00.083 1.32L12.585 10l-1.292 1.293a1 1 0 001.414 1.414l2-2a1 1 0 000-1.414l-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomCodeFilledIcon;
/* prettier-ignore-end */
