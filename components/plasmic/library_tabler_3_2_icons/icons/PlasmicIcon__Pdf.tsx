/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PdfIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PdfIcon(props: PdfIconProps) {
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
          "M10 8v8h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2zm-7 4h2a2 2 0 100-4H3v8m14-4h3m1-4h-4v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PdfIcon;
/* prettier-ignore-end */
