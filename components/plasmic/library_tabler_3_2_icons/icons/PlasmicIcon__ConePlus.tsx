/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConePlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConePlusIcon(props: ConePlusIconProps) {
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
          "M18.03 12.022l-5.16-9.515a1 1 0 00-1.74 0L3 17.497v.5C3 19.657 7.03 21 12 21c.17 0 .34-.002.508-.005M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ConePlusIcon;
/* prettier-ignore-end */
