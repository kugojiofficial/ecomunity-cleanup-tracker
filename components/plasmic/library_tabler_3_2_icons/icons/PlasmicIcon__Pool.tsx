/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PoolIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PoolIcon(props: PoolIconProps) {
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
          "M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1 2.401 2.401 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1M2 16a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1 2.401 2.401 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1m-7-4V4.5a1.5 1.5 0 113 0M9 12V4.5a1.5 1.5 0 00-3 0m9 .5H9m0 5h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PoolIcon;
/* prettier-ignore-end */
