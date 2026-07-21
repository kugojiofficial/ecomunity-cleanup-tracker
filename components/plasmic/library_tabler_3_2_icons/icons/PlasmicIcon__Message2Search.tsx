/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Message2SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Message2SearchIcon(props: Message2SearchIconProps) {
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
          "M8 9h8m-8 4h5m-1 8l-.5-.5L9 18H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v4.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 18a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Message2SearchIcon;
/* prettier-ignore-end */
