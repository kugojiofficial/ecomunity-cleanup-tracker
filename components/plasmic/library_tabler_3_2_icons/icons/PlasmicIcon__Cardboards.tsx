/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardboardsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardboardsIcon(props: CardboardsIconProps) {
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
          "M3 8v8.5A2.5 2.5 0 005.5 19h1.06a3 3 0 002.34-1.13l1.54-1.92a2 2 0 013.12 0l1.54 1.92A3 3 0 0017.44 19h1.06a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2H5a2 2 0 00-2 2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7 12a1 1 0 102 0 1 1 0 00-2 0zm8 0a1 1 0 102 0 1 1 0 00-2 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CardboardsIcon;
/* prettier-ignore-end */
