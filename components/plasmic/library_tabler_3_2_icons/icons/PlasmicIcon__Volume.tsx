/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VolumeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VolumeIcon(props: VolumeIconProps) {
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
          "M15 8a5 5 0 010 8m2.7-11a9 9 0 010 14M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l3.5-4.5A.8.8 0 0111 5v14a.8.8 0 01-1.5.5L6 15z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VolumeIcon;
/* prettier-ignore-end */
