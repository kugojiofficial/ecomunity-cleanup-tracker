/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterJFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterJFilledIcon(props: CircleLetterJFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5h-4a1 1 0 00-1 1l.007.117A1 1 0 0010 9h3v5a1 1 0 01-1.993.117L11 14a1 1 0 00-2 0 3 3 0 006 0V8a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterJFilledIcon;
/* prettier-ignore-end */
