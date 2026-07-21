/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZodiacLeoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZodiacLeoIcon(props: ZodiacLeoIconProps) {
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
          "M13 17a4 4 0 108 0M3 16a3 3 0 106 0 3 3 0 00-6 0zm4-9a4 4 0 108 0 4 4 0 00-8 0zm0 0c0 3 2 5 2 9m6-9c0 4-2 6-2 10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZodiacLeoIcon;
/* prettier-ignore-end */
