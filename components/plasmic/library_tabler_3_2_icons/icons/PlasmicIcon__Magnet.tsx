/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnetIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnetIcon(props: MagnetIconProps) {
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
          "M4 13V5a2 2 0 012-2h1a2 2 0 012 2v8a3 3 0 006 0V5a2 2 0 012-2h1a2 2 0 012 2v8a8 8 0 01-16 0zm0-5h5m6 0h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MagnetIcon;
/* prettier-ignore-end */
