/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColorPickerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColorPickerOffIcon(props: ColorPickerOffIconProps) {
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
          "M11 7l6 6m-5-5l3.699-3.699a1 1 0 011.4 0l2.6 2.6a1 1 0 010 1.4l-3.702 3.702m-2 2l-6 6h-4v-4l6-6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ColorPickerOffIcon;
/* prettier-ignore-end */
