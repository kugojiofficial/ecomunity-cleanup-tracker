/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigDownIcon(props: ArrowBigDownIconProps) {
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
          "M15 4v8h3.586a1 1 0 01.707 1.707l-6.586 6.586a1 1 0 01-1.414 0l-6.586-6.586A1 1 0 015.414 12H9V4a1 1 0 011-1h4a1 1 0 011 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowBigDownIcon;
/* prettier-ignore-end */
