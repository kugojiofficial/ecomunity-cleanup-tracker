/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JsonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JsonIcon(props: JsonIconProps) {
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
          "M20 16V8l3 8V8m-8 0a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2zM1 8h3v6.5a1.5 1.5 0 01-3 0V14m6 1a1 1 0 001 1h1a1 1 0 001-1v-2a1 1 0 00-1-1H8a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 011 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default JsonIcon;
/* prettier-ignore-end */
