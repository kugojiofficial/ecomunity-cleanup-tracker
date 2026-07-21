/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersIcon(props: UsersIconProps) {
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
          "M5 7a4 4 0 108 0 4 4 0 00-8 0zM3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2m1-17.87a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UsersIcon;
/* prettier-ignore-end */
