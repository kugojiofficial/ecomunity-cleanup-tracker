/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeglassOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeglassOffIcon(props: EyeglassOffIconProps) {
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
          "M5.536 5.546L3 14M16 4h2l3 10m-11 2h4m5.426 3.423A3.5 3.5 0 0114 16.5V14m4 0h3v2.5c0 .157-.01.312-.03.463M10 16.5a3.5 3.5 0 11-7 0V14h7v2.5zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EyeglassOffIcon;
/* prettier-ignore-end */
