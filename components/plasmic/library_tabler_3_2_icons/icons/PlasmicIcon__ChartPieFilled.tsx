/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartPieFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartPieFilledIcon(props: ChartPieFilledIconProps) {
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
          "M9.883 2.207a1.9 1.9 0 012.087 1.522l.025.167L12 4v7a1 1 0 00.883.993L13 12h6.8a2 2 0 012 2 1 1 0 01-.026.226A10 10 0 119.504 2.293l.27-.067.11-.02-.001.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14 3.5V9a1 1 0 001 1h5.5a1 1 0 00.943-1.332 10 10 0 00-6.11-6.111A1 1 0 0014 3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartPieFilledIcon;
/* prettier-ignore-end */
