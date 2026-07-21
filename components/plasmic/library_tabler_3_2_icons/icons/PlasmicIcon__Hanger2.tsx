/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Hanger2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Hanger2Icon(props: Hanger2IconProps) {
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
        d={"M12 9l-7.971 4.428A2 2 0 003 15.177V16a2 2 0 002 2h1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 18h1a2 2 0 002-2v-.823a2 2 0 00-1.029-1.749L12 9c-1.457-.81-1.993-2.333-2-4a2 2 0 114 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 18a2 2 0 012-2h8a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Hanger2Icon;
/* prettier-ignore-end */
