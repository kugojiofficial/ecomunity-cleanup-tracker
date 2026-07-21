/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComputerChipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComputerChipIcon(props: ComputerChipIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M23 25H9c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M19 21h-6c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2M14 3v4m-4-4v4m12-4v4m-4-4v4m-4 18v4m-4-4v4m12-4v4m-4-4v4m7-11h4m-4 4h4m-4-12h4m-4 4h4M3 18h4m-4 4h4M3 10h4m-4 4h4"
        }
      ></path>
    </svg>
  );
}

export default ComputerChipIcon;
/* prettier-ignore-end */
