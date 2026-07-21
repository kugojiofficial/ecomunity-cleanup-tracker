/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonalPyramidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonalPyramidIcon(props: HexagonalPyramidIconProps) {
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
          "M11.162 2.457L3.316 15.411a1.988 1.988 0 00.267 2.483l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l2.527-2.523a1.987 1.987 0 00.267-2.483L12.838 2.457a.996.996 0 00-1.676 0zM12 2L7 20.9M12 2l5 18.9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonalPyramidIcon;
/* prettier-ignore-end */
