/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DimensionsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DimensionsIcon(props: DimensionsIconProps) {
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
          "M3 5h11m-2 2l2-2-2-2M5 3L3 5l2 2m14 3v11m-2-2l2 2 2-2m0-7l-2-2-2 2M3 12a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DimensionsIcon;
/* prettier-ignore-end */
