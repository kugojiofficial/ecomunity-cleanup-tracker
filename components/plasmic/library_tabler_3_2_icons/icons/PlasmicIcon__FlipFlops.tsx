/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlipFlopsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlipFlopsIcon(props: FlipFlopsIconProps) {
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
          "M18 4c2.21 0 4 1.682 4 3.758 0 .078 0 .156-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3-1.796 0-3.28-1.311-3.392-3l-.6-9.014c-.138-2.071 1.538-3.855 3.743-3.985A4.14 4.14 0 0118 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.5 14c1-3.333 2.167-5 3.5-5 1.333 0 2.5 1.667 3.5 5M18 16v1M6 4c2.21 0 4 1.682 4 3.758 0 .078 0 .156-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3-1.796 0-3.28-1.311-3.392-3l-.6-9.014C1.87 5.921 3.546 4.137 5.75 4.007 5.834 4.007 5.917 4 6 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M2.5 14c1-3.333 2.167-5 3.5-5 1.333 0 2.5 1.667 3.5 5M6 16v1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlipFlopsIcon;
/* prettier-ignore-end */
