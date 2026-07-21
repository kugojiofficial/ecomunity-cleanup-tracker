/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldOffIcon(props: ShieldOffIconProps) {
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
          "M17.67 17.667A12 12 0 0112 21 12 12 0 013.5 6c.794.036 1.583-.006 2.357-.124m3.128-.926A11.998 11.998 0 0012 3a12 12 0 008.5 3 11.998 11.998 0 01-1.116 9.376M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldOffIcon;
/* prettier-ignore-end */
