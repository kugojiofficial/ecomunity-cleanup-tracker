/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowUpRightCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowUpRightCircleIcon(props: ArrowUpRightCircleIconProps) {
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
          "M8.464 15.536L18 6m0 4V6h-4m-5.586 9.586a2 2 0 10-2.877 2.779 2 2 0 002.877-2.779z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowUpRightCircleIcon;
/* prettier-ignore-end */
