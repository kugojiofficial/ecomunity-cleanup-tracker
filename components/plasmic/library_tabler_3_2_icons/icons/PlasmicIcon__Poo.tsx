/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PooIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PooIcon(props: PooIconProps) {
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
        d={"M10 12h.01M14 12h.01M10 16a3.5 3.5 0 004 0"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 4c2 0 3.5 1.5 3.5 4h.164a2.5 2.5 0 012.196 3.32 3 3 0 011.615 3.063 3 3 0 01-1.299 5.607H7a3 3 0 01-1.474-5.613 3 3 0 011.615-3.062 2.5 2.5 0 012.195-3.32H9.5c1.5 0 2.5-2 1.5-4V4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PooIcon;
/* prettier-ignore-end */
