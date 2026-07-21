/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindowOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindowOffIcon(props: WindowOffIconProps) {
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
          "M6.166 6.19A6.903 6.903 0 005 10v10a1 1 0 001 1h12a1 1 0 001-1v-1m0-4v-5c0-3.728-3.134-7-7-7a6.86 6.86 0 00-3.804 1.158M5 13h8m4 0h2M12 3v5m0 4v9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WindowOffIcon;
/* prettier-ignore-end */
