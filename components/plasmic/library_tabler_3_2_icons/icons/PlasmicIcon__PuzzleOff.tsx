/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PuzzleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PuzzleOffIcon(props: PuzzleOffIconProps) {
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
          "M8.18 4.171A2 2 0 0112 5v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 001 1h1a2 2 0 01.819 3.825M17 17v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 00-4 0v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V8a1 1 0 011-1h3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PuzzleOffIcon;
/* prettier-ignore-end */
