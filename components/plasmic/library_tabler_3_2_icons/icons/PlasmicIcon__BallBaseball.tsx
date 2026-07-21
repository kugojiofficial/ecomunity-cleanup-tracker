/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallBaseballIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallBaseballIcon(props: BallBaseballIconProps) {
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
          "M5.636 18.364A9 9 0 1018.365 5.635 9 9 0 005.636 18.364zM12.495 3.02a9 9 0 01-9.475 9.475m17.96-.99a9 9 0 00-9.475 9.475M9 9l2 2m2 2l2 2m-4-8l2 1m-6 3l1 2m8-2l1 2m-6 3l2 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallBaseballIcon;
/* prettier-ignore-end */
