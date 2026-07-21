/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterGFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterGFilledIcon(props: CircleLetterGFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5h-2a3 3 0 00-3 3v4a3 3 0 003 3h2a1 1 0 001-1v-4a1 1 0 00-1-1h-1a1 1 0 00-1 1l.007.117A1 1 0 0013 13v2h-1a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterGFilledIcon;
/* prettier-ignore-end */
