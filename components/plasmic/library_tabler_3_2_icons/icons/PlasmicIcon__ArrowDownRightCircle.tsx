/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownRightCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownRightCircleIcon(props: ArrowDownRightCircleIconProps) {
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
          "M8.464 8.464L18 18m-4 0h4v-4M8.414 8.414a2 2 0 10-2.779-2.877 2 2 0 002.779 2.877z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowDownRightCircleIcon;
/* prettier-ignore-end */
