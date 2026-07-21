/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnlinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnlinkIcon(props: UnlinkIconProps) {
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
          "M17 22v-2m-8-5l6-6m-4-3l.463-.536a5 5 0 017.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 01-7.127 0 4.972 4.972 0 010-7.071L6 11m14 6h2M2 7h2m3-5v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UnlinkIcon;
/* prettier-ignore-end */
