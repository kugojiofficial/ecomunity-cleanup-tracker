/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RulerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RulerOffIcon(props: RulerOffIconProps) {
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
          "M8 4h11a1 1 0 011 1v5a1 1 0 01-1 1h-4m-3.713.299A1 1 0 0011 12v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5c0-.284.118-.54.308-.722M4 8h2m-2 4h3m-3 4h2m6-12v3m4-3v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RulerOffIcon;
/* prettier-ignore-end */
