/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CastOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CastOffIcon(props: CastOffIconProps) {
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
          "M3 19h.01M7 19a4 4 0 00-4-4m8 4a8 8 0 00-8-8m12 8h3c.297 0 .591-.044.875-.13m2-2a3 3 0 00.128-.868v-8a3 3 0 00-3-3h-9m-3.865.136a3 3 0 00-1.935 1.864M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CastOffIcon;
/* prettier-ignore-end */
