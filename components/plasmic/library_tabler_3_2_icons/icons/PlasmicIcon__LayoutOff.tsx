/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutOffIcon(props: LayoutOffIconProps) {
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
          "M8 4a2 2 0 012 2M8.838 8.816A1.993 1.993 0 018 9H6a2 2 0 01-2-2V6c0-.549.221-1.046.58-1.407M4 15a2 2 0 012-2h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3zm10-5V6a2 2 0 012-2h2a2 2 0 012 2v10m-.595 3.423A2 2 0 0118 20h-2a2 2 0 01-2-2v-4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayoutOffIcon;
/* prettier-ignore-end */
