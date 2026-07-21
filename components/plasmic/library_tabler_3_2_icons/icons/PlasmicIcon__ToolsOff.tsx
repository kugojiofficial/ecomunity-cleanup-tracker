/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToolsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToolsOffIcon(props: ToolsOffIconProps) {
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
        d={"M16 12l4-4a2.829 2.829 0 00-4-4l-4 4m-2 2l-7 7v4h4l7-7m.5-8.5l4 4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 8L7 3M5 5L3 7l5 5M7 8L5.5 9.5M16 12l5 5m-2 2l-2 2-5-5m4 1l-1.5 1.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ToolsOffIcon;
/* prettier-ignore-end */
