/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SofaOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SofaOffIcon(props: SofaOffIconProps) {
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
        d={"M18 14v-1a2 2 0 014 0v5m-3 1H3a1 1 0 01-1-1v-5a2 2 0 014 0v1h8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 11V8c0-1.082.573-2.03 1.432-2.558M9 5h8a3 3 0 013 3v3m-8-6v3m0 4v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SofaOffIcon;
/* prettier-ignore-end */
