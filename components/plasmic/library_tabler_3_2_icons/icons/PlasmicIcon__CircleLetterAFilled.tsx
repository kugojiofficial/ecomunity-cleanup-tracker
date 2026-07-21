/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterAFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterAFilledIcon(props: CircleLetterAFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5a3 3 0 00-3 3v6a1 1 0 102 0v-2h2v2a1 1 0 00.883.993L14 17a1 1 0 001-1v-6a3 3 0 00-3-3zm0 2a1 1 0 011 1v2h-2v-2a1 1 0 01.883-.993L12 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterAFilledIcon;
/* prettier-ignore-end */
