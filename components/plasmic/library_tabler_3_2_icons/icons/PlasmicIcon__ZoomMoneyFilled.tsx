/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomMoneyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomMoneyFilledIcon(props: ZoomMoneyFilledIconProps) {
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
          "M14 3.072a8 8 0 012.32 11.834l5.387 5.387a1 1 0 01-1.414 1.414l-5.388-5.387A8 8 0 012 10l.005-.285A8 8 0 0114 3.072zM12 6H9.5a2.5 2.5 0 100 5h1a.5.5 0 010 1H8a1 1 0 000 2h2.5a2.5 2.5 0 000-5h-1a.5.5 0 110-1H12a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomMoneyFilledIcon;
/* prettier-ignore-end */
