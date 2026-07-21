/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PyramidOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PyramidOffIcon(props: PyramidOffIconProps) {
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
          "M21.384 17.373a1.005 1.005 0 00-.013-1.091l-8.54-13.836a.999.999 0 00-1.664 0l-1.8 2.917m-1.531 2.48l-5.209 8.439a1.005 1.005 0 00.386 1.452l8.092 4.054a1.994 1.994 0 001.789 0l5.903-2.958M12 2v6m0 4v10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PyramidOffIcon;
/* prettier-ignore-end */
