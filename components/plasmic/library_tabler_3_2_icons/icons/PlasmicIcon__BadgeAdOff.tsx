/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeAdOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeAdOffIcon(props: BadgeAdOffIconProps) {
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
        d={"M9 5h10a2 2 0 012 2v10m-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 14v1h1m2-2v-2a2 2 0 00-2-2h-1v1m-7 5v-4.5a1.5 1.5 0 012.077-1.385m.788.762c.087.19.135.4.135.623V15m-3-2h3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BadgeAdOffIcon;
/* prettier-ignore-end */
