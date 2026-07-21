/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Car4WdIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Car4WdIcon(props: Car4WdIconProps) {
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
          "M5 5a2 2 0 114 0v2a2 2 0 11-4 0V5zm0 12a2 2 0 014 0v2a2 2 0 01-4 0v-2zM15 5a2 2 0 114 0v2a2 2 0 11-4 0V5zm0 12a2 2 0 014 0v2a2 2 0 01-4 0v-2zm-6 1h6M9 6h6m-3 .5V6v12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Car4WdIcon;
/* prettier-ignore-end */
