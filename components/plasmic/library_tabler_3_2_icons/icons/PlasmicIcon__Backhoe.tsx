/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackhoeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackhoeIcon(props: BackhoeIconProps) {
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
          "M2 17a2 2 0 104 0 2 2 0 00-4 0zm9 0a2 2 0 104 0 2 2 0 00-4 0zm2 2H4m0-4h9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 12V7h2a3 3 0 013 3v5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 15v-2a1 1 0 011-1h7m8.12-2.12L18 5l-5 5m8.12-.12A3 3 0 0119 15a3 3 0 01-2.12-.88l4.24-4.24z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BackhoeIcon;
/* prettier-ignore-end */
