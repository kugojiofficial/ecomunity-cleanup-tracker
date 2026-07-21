/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogicXorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogicXorIcon(props: LogicXorIconProps) {
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
          "M22 12h-4M2 9h6m-6 6h6m-1 4c1.778-4.667 1.778-9.333 0-14m3 0c10.667 2.1 10.667 12.6 0 14 1.806-4.667 1.806-9.333 0-14z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LogicXorIcon;
/* prettier-ignore-end */
