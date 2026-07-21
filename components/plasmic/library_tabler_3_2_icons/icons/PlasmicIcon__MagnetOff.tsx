/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnetOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnetOffIcon(props: MagnetOffIconProps) {
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
          "M7 3a2 2 0 012 2m0 4v4a3 3 0 005.552 1.578M15 11V5a2 2 0 012-2h1a2 2 0 012 2v8a7.99 7.99 0 01-.424 2.577m-1.463 2.584A8 8 0 014 13V5c0-.297.065-.58.181-.833M4 8h4m7 0h4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MagnetOffIcon;
/* prettier-ignore-end */
