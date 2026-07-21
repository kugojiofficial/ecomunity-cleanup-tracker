/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessAutoFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessAutoFilledIcon(props: BrightnessAutoFilledIconProps) {
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
          "M12.707 2.793L14.915 5H18a1 1 0 01.993.883L19 6v3.085l2.207 2.208a1 1 0 01.083 1.32l-.083.094L19 14.914V18a1 1 0 01-.883.993L18 19h-3.086l-2.207 2.207a1 1 0 01-1.32.083l-.094-.083L9.085 19H6a1 1 0 01-.993-.883L5 18v-3.085l-2.207-2.208a1 1 0 01-.083-1.32l.083-.094L5 9.084V6a1 1 0 01.883-.993L6 5h3.084l2.209-2.207a1 1 0 011.414 0zM12 8a3 3 0 00-3 3v3.5a1 1 0 102 0V14h2v.5a1 1 0 00.883.993L14 15.5a1 1 0 001-1V11a3 3 0 00-3-3zm0 2a1 1 0 011 1v1h-2v-1a1 1 0 01.883-.993L12 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrightnessAutoFilledIcon;
/* prettier-ignore-end */
