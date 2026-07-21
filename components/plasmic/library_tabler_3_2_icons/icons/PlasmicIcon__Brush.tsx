/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrushIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrushIcon(props: BrushIconProps) {
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
          "M3 21v-4a4 4 0 114 4H3zM21 3A16 16 0 008.2 13.2M21 3a16 16 0 01-10.2 12.8M10.6 9a9 9 0 014.4 4.4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrushIcon;
/* prettier-ignore-end */
