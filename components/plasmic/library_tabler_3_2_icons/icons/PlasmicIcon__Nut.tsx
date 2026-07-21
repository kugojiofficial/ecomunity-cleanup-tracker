/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NutIcon(props: NutIconProps) {
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
          "M19 6.84a2.006 2.006 0 011 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a1.995 1.995 0 01-1.94 0l-6-3.844A2.006 2.006 0 014 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.049 2.049 0 012 0l6 3.582H19z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 12a3 3 0 106 0 3 3 0 00-6 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NutIcon;
/* prettier-ignore-end */
