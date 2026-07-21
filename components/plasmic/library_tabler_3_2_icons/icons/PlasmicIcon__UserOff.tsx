/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserOffIcon(props: UserOffIconProps) {
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
          "M8.18 8.189a4.01 4.01 0 002.616 2.627m3.507-.545a4 4 0 10-5.59-5.552M6 21v-2a4 4 0 014-4h4c.412 0 .81.062 1.183.178m2.633 2.618c.12.38.184.785.184 1.204v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UserOffIcon;
/* prettier-ignore-end */
