/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallVolleyballIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallVolleyballIcon(props: BallVolleyballIconProps) {
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
          "M3 12a9 9 0 1018.001 0A9 9 0 003 12zm9 0a8 8 0 008 4M7.5 13.5A12 12 0 0016 20m-4-8a8 8 0 00-7.464 4.928m8.415-9.575a12 12 0 00-9.88 4.111M12 12a8 8 0 00-.536-8.928m4.085 12.075a12 12 0 001.38-10.611"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallVolleyballIcon;
/* prettier-ignore-end */
