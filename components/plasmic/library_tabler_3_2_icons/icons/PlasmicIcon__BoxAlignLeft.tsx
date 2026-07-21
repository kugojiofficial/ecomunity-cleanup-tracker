/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignLeftIcon(props: BoxAlignLeftIconProps) {
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
          "M10.002 20.003v-16h-5a1 1 0 00-1 1v14a1 1 0 001 1h5zm5 0h-.01m5.011 0h-.011m.011-5.001h-.011m.011-6h-.011m.011-5h-.011m-4.99 0h-.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxAlignLeftIcon;
/* prettier-ignore-end */
