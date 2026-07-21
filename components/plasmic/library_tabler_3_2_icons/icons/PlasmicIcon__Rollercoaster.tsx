/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RollercoasterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RollercoasterIcon(props: RollercoasterIconProps) {
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
          "M3 21a5.55 5.55 0 005.265-3.795L9 15a8.776 8.776 0 018.325-6H21m-1 0v12M8 21v-3m4 3V11m4-1.5V21M15 3h5v3h-5V3zM6 8l4-3 2 2.5-4 3-1.8-.5L6 8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RollercoasterIcon;
/* prettier-ignore-end */
