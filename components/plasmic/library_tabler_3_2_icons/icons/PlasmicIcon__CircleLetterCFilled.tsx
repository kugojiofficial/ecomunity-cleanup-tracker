/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterCFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterCFilledIcon(props: CircleLetterCFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5a3 3 0 00-3 3v4a3 3 0 006 0 1 1 0 00-1.993-.117L13 14a1 1 0 01-2 0v-4a1 1 0 011.993-.117L13 10a1 1 0 002 0 3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterCFilledIcon;
/* prettier-ignore-end */
