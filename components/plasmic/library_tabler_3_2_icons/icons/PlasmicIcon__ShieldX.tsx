/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldXIcon(props: ShieldXIconProps) {
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
          "M13.252 20.601c-.408.155-.826.288-1.252.399A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3 12 12 0 01-.19 7.357M22 22l-5-5m0 5l5-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldXIcon;
/* prettier-ignore-end */
