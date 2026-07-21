/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WallOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WallOffIcon(props: WallOffIconProps) {
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
          "M8 4h10a2 2 0 012 2v10m-.589 3.417c-.361.36-.86.583-1.411.583H6a2 2 0 01-2-2V6c0-.55.222-1.047.58-1.409M4 8h4m4 0h8m0 4h-4m-4 0H4m0 4h12M9 4v1m5 3v2m-6 2v4m3 0v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WallOffIcon;
/* prettier-ignore-end */
