/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmokingNoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmokingNoIcon(props: SmokingNoIconProps) {
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
          "M8 13v4m8-12v.5a2 2 0 002 2 2 2 0 012 2v.5M3 3l18 18m-4-8h3a1 1 0 011 1v2c0 .28-.115.533-.3.714M17 17H4a1 1 0 01-1-1v-2a1 1 0 011-1h9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SmokingNoIcon;
/* prettier-ignore-end */
