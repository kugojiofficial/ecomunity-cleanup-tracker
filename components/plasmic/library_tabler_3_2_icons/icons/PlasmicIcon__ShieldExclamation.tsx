/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldExclamationIcon(props: ShieldExclamationIconProps) {
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
          "M15.04 19.745c-.942.551-1.964.976-3.04 1.255A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3 12 12 0 01.195 6.015M19 16v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldExclamationIcon;
/* prettier-ignore-end */
