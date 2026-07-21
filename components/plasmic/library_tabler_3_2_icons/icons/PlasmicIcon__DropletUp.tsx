/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletUpIcon(props: DropletUpIconProps) {
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
          "M18.6 11.998a6.656 6.656 0 00-.536-1.12l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.376 1.376 0 00-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.16 7.16 0 005.002 1.562M19 22v-6m3 3l-3-3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DropletUpIcon;
/* prettier-ignore-end */
