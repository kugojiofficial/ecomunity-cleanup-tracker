/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GaugeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GaugeFilledIcon(props: GaugeFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-.293 3.953a1 1 0 00-1.414 0l-2.59 2.59-.083.094-.068.1a2.001 2.001 0 00-2.547 1.774L10 12l.005.15a2 2 0 103.917-.701.967.967 0 00.195-.152l2.59-2.59.083-.094a1 1 0 00-.083-1.32zM12 6a6 6 0 00-6 6 1 1 0 102 0 4 4 0 014-4 1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GaugeFilledIcon;
/* prettier-ignore-end */
