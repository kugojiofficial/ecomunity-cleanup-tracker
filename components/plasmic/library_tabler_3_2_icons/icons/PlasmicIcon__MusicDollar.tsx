/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MusicDollarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MusicDollarIcon(props: MusicDollarIconProps) {
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
          "M3 17a3 3 0 106 0 3 3 0 00-6 0zm6 0V4h10v6M9 8h10m2 7h-2.5a1.5 1.5 0 100 3h1a1.5 1.5 0 110 3H17m2 0v1m0-8v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MusicDollarIcon;
/* prettier-ignore-end */
