/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignTopLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignTopLeftIcon(props: BoxAlignTopLeftIconProps) {
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
          "M11 5v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h5a1 1 0 011 1zm4-1h-.01M20 4h-.01M20 9h-.01m.01 6h-.01M4 15h-.01M20 20h-.01M15 20h-.01M9 20h-.01M4 20h-.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxAlignTopLeftIcon;
/* prettier-ignore-end */
