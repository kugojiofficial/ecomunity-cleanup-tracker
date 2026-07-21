/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldDollarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldDollarIcon(props: ShieldDollarIconProps) {
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
          "M13.018 20.687c-.333.119-.673.223-1.018.313A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3c.433 1.472.575 2.998.436 4.495M21 15h-2.5a1.5 1.5 0 100 3h1a1.5 1.5 0 110 3H17m2 0v1m0-8v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldDollarIcon;
/* prettier-ignore-end */
