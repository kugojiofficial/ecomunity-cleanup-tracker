/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarrierBlockOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarrierBlockOffIcon(props: BarrierBlockOffIconProps) {
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
          "M11 7h8a1 1 0 011 1v7c0 .27-.107.516-.282.696M16 16H5a1 1 0 01-1-1V8a1 1 0 011-1h2m0 9v4m.5-4l4.244-4.244m2.001-2.001L16.5 7m-3 9l1.249-1.249m1.992-1.992L20 9.5m-16 4l4.752-4.752M17 17v3M5 20h4m6 0h4M17 7V5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarrierBlockOffIcon;
/* prettier-ignore-end */
