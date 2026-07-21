/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RouteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RouteOffIcon(props: RouteOffIconProps) {
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
          "M4 19a2 2 0 104 0 2 2 0 00-4 0zM16 5a2 2 0 104 0 2 2 0 00-4 0zm-4 14h4.5c.71 0 1.372-.212 1.924-.576m1.545-2.459A3.5 3.5 0 0016.5 12h-.499m-4 0H8.5a3.5 3.5 0 01-2.477-5.972M8.5 5H12M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RouteOffIcon;
/* prettier-ignore-end */
