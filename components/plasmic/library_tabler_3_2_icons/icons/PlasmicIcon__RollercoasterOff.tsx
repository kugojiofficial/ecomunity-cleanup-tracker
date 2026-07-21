/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RollercoasterOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RollercoasterOffIcon(props: RollercoasterOffIconProps) {
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
          "M3 21a5.55 5.55 0 005.265-3.795L9 15a8.76 8.76 0 012.35-3.652m2.403-1.589A8.76 8.76 0 0117.325 9H21m-1 0v7m0 4v1M8 21v-3m4 3v-9m4-2.5V12m0 4v5M15 3h5v3h-5V3zM9.446 5.415L10 5l2 2.5-.285.213M9.447 9.415L8 10.5 6.2 10 6 8l1.139-.854M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RollercoasterOffIcon;
/* prettier-ignore-end */
