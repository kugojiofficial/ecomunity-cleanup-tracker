/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonNumber7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonNumber7Icon(props: HexagonNumber7IconProps) {
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
          "M19.02 6.858a2 2 0 011 1.752v6.555c0 .728-.395 1.4-1.032 1.753l-6.017 3.844a2 2 0 01-1.948 0l-6.016-3.844a2 2 0 01-1.032-1.752V8.61c0-.728.395-1.4 1.032-1.753l6.017-3.582a2.062 2.062 0 012 0l6.017 3.583h-.029.008z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 8h4l-2 8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonNumber7Icon;
/* prettier-ignore-end */
