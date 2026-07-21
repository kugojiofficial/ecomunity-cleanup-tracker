/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallpenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallpenIcon(props: BallpenIconProps) {
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
        d={"M14 6l7 7-4 4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.828 18.172a2.829 2.829 0 004 0L20.414 7.586a2 2 0 000-2.829l-1.171-1.171a2 2 0 00-2.829 0L5.828 14.172a2.828 2.828 0 000 4zM4 20l1.768-1.768"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallpenIcon;
/* prettier-ignore-end */
