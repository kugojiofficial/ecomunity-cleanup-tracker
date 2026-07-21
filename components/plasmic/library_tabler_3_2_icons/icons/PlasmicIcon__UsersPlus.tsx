/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersPlusIcon(props: UsersPlusIconProps) {
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
          "M5 7a4 4 0 108 0 4 4 0 00-8 0zM3 21v-2a4 4 0 014-4h4c.96 0 1.84.338 2.53.901M16 3.13a4 4 0 010 7.75M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UsersPlusIcon;
/* prettier-ignore-end */
