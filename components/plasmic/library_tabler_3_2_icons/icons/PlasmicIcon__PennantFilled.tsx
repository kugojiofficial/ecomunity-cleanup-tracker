/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PennantFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PennantFilledIcon(props: PennantFilledIconProps) {
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
          "M10 2a1 1 0 01.993.883L11 3v.35l8.406 3.736c.752.335.79 1.365.113 1.77l-.113.058L11 12.649V20h1a1 1 0 01.117 1.993L12 22H8a1 1 0 01-.117-1.993L8 20h1V3a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PennantFilledIcon;
/* prettier-ignore-end */
