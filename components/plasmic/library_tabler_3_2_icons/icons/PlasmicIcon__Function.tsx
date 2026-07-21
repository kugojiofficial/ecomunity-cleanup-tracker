/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FunctionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FunctionIcon(props: FunctionIconProps) {
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
          "M4 6.667A2.667 2.667 0 016.667 4h10.666A2.667 2.667 0 0120 6.667v10.666A2.668 2.668 0 0117.333 20H6.667A2.668 2.668 0 014 17.333V6.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 15.5v.25c0 .69.56 1.25 1.25 1.25a1.38 1.38 0 001.374-1.244l.752-7.512A1.381 1.381 0 0113.75 7c.69 0 1.25.56 1.25 1.25v.25M9 12h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FunctionIcon;
/* prettier-ignore-end */
