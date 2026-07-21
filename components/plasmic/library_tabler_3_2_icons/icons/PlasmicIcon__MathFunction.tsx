/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MathFunctionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MathFunctionIcon(props: MathFunctionIconProps) {
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
          "M3 19a2 2 0 002 2c2 0 2-4 3-9s1-9 3-9a2 2 0 012 2m-8 7h6m4 0l6 6m-6 0l6-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MathFunctionIcon;
/* prettier-ignore-end */
