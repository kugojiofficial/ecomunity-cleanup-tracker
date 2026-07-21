/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterDFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterDFilledIcon(props: CircleLetterDFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5h-2a1 1 0 00-1 1v8a1 1 0 001 1h2a3 3 0 003-3v-4a3 3 0 00-3-3zm0 2a1 1 0 011 1v4a1 1 0 01-1 1h-1V9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterDFilledIcon;
/* prettier-ignore-end */
