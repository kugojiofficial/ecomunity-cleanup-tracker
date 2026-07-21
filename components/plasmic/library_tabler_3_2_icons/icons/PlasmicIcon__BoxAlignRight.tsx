/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignRightIcon(props: BoxAlignRightIconProps) {
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
          "M13.998 20.003v-16h5a1 1 0 011 1v14a1 1 0 01-1 1h-5zm-5 0h.01m-5.011 0h.011m-.011-5.001h.011m-.011-6h.011m-.011-5h.011m4.99 0h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxAlignRightIcon;
/* prettier-ignore-end */
