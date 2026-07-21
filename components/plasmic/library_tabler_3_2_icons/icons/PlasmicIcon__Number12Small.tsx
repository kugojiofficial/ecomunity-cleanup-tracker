/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Number12SmallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Number12SmallIcon(props: Number12SmallIconProps) {
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
          "M7 10l2-2v8m4-8h3a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 00-1 1v2a1 1 0 001 1h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Number12SmallIcon;
/* prettier-ignore-end */
