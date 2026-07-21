/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockFilledIcon(props: ClockFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM12 6a1 1 0 00-.993.883L11 7v5l.009.131a1 1 0 00.197.477l.087.1 3 3 .094.082a1 1 0 001.226 0l.094-.083.083-.094a1 1 0 000-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0012 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockFilledIcon;
/* prettier-ignore-end */
