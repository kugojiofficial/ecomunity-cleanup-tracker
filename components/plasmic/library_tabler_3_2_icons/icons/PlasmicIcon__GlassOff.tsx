/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlassOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlassOffIcon(props: GlassOffIconProps) {
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
          "M8 21h8m-4-5v5m5-16l1 6c0 .887-.233 1.685-.646 2.37m-2.083 1.886c-.941.48-2.064.744-3.271.744-3.314 0-6-1.988-6-5l.711-4.268"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.983 6.959c.329.027.669.041 1.017.041 2.761 0 5-.895 5-2s-2.239-2-5-2c-1.716 0-3.23.346-4.13.872M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GlassOffIcon;
/* prettier-ignore-end */
