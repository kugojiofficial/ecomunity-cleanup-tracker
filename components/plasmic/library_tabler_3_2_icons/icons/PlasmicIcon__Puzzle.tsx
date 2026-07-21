/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PuzzleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PuzzleIcon(props: PuzzleIconProps) {
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
          "M4 7h3a1 1 0 001-1V5a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 001 1h1a2 2 0 010 4h-1a1 1 0 00-1 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 00-4 0v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V8a1 1 0 011-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PuzzleIcon;
/* prettier-ignore-end */
