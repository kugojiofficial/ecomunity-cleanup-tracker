/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessFilledIcon(props: BrightnessFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM8 5.072A8 8 0 0012.001 20L12 4a8 8 0 00-4 1.072z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrightnessFilledIcon;
/* prettier-ignore-end */
