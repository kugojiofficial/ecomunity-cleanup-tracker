/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HourglassFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HourglassFilledIcon(props: HourglassFilledIconProps) {
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
          "M17 2a2 2 0 011.995 1.85L19 4v2a6.996 6.996 0 01-3.393 6 6.993 6.993 0 013.388 5.728L19 18v2a2 2 0 01-1.85 1.995L17 22H7a2 2 0 01-1.995-1.85L5 20v-2a6.996 6.996 0 013.393-6 6.994 6.994 0 01-3.388-5.728L5 6V4a2 2 0 011.85-1.995L7 2h10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HourglassFilledIcon;
/* prettier-ignore-end */
