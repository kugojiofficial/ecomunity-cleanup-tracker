/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArtboardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArtboardOffIcon(props: ArtboardOffIconProps) {
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
          "M12 8h3a1 1 0 011 1v3m-.284 3.698A1 1 0 0115 16H9a1 1 0 01-1-1V9c0-.273.11-.52.287-.7M3 8h1m-1 8h1M8 3v1m8-1v1m4 4h1m-1 8h1M8 20v1m8-1v1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArtboardOffIcon;
/* prettier-ignore-end */
