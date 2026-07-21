/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsIcon(props: IconsIconProps) {
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
          "M3 6.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM2.5 21h8l-4-7-4 7zM14 3l7 7m-7 0l7-7m-7 11h7v7h-7v-7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconsIcon;
/* prettier-ignore-end */
