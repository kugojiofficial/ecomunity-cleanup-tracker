/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SnowflakeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SnowflakeOffIcon(props: SnowflakeOffIconProps) {
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
          "M10 4l2 1 2-1m-2-2v6m1.196 1.186L15 10.22m2.928-3.952l.134 2.232 1.866 1.232"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.66 7l-5.629 3.25L15 11m4.928 3.268l-1.015.67m-4.701-.712l-2.171 1.262M14 20l-2-1-2 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 22v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3.34 17l5.629-3.25-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3.34 7l5.629 3.25.802-.466M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SnowflakeOffIcon;
/* prettier-ignore-end */
