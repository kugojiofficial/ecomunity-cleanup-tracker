/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GrowthIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GrowthIcon(props: GrowthIconProps) {
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
          "M16.5 15a4.5 4.5 0 00-4.5 4.5c0-2.485-1.79-4.5-4-4.5m8.5-4a4.5 4.5 0 00-4.5 4.5c0-2.485-1.79-4.5-4-4.5m8.5-4a4.5 4.5 0 00-4.5 4.5C12 9.015 10.21 7 8 7m4-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GrowthIcon;
/* prettier-ignore-end */
