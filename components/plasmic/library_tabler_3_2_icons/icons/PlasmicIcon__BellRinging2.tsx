/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellRinging2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellRinging2Icon(props: BellRinging2IconProps) {
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
          "M19.364 4.636a2 2 0 010 2.828 7 7 0 01-1.414 7.072l-2.122 2.12a4 4 0 00-.707 3.536L3.808 8.88a4 4 0 003.535-.707L9.464 6.05a7 7 0 017.072-1.414 2 2 0 012.828 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7.343 12.414l-.707.707a3 3 0 004.243 4.243l.707-.707"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BellRinging2Icon;
/* prettier-ignore-end */
