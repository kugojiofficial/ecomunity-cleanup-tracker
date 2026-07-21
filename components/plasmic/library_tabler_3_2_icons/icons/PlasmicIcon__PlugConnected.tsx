/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlugConnectedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlugConnectedIcon(props: PlugConnectedIconProps) {
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
          "M7 12l5 5-1.5 1.5a3.535 3.535 0 11-5-5L7 12zm10 0l-5-5 1.5-1.5a3.536 3.536 0 115 5L17 12zM3 21l2.5-2.5m13-13L21 3m-11 8l-2 2m5 1l-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlugConnectedIcon;
/* prettier-ignore-end */
