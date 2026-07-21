/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VolumeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VolumeOffIcon(props: VolumeOffIconProps) {
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
          "M15 8a5 5 0 011.912 4.934m-1.377 2.602A4.992 4.992 0 0115 16m2.7-11a9 9 0 012.362 11.086m-1.676 2.299A9.005 9.005 0 0117.7 19M9.069 5.054L9.5 4.5A.8.8 0 0111 5v2m0 4v8a.8.8 0 01-1.5.5L6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l1.294-1.664M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VolumeOffIcon;
/* prettier-ignore-end */
