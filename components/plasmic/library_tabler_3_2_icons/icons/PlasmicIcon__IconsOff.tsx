/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsOffIcon(props: IconsOffIconProps) {
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
          "M4.01 4.041A3.5 3.5 0 006.5 10c.975 0 1.865-.357 2.5-1m.958-3.044a3.503 3.503 0 00-2.905-2.912M2.5 21h8l-4-7-4 7zM14 3l7 7m-7 0l7-7m-3 11h3v3m0 4h-7v-7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconsOffIcon;
/* prettier-ignore-end */
