/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NumbersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NumbersIcon(props: NumbersIconProps) {
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
          "M8 10V3L6 5m0 11a2 2 0 014 0c0 .591-.601 1.46-1 2l-3 3h4m5-7a2 2 0 102-2 2 2 0 10-2-2m-8.5 0h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NumbersIcon;
/* prettier-ignore-end */
