/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PrinterOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PrinterOffIcon(props: PrinterOffIconProps) {
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
          "M20.412 16.416c.363-.362.588-.863.588-1.416v-4a2 2 0 00-2-2h-6M9 9H5a2 2 0 00-2 2v4a2 2 0 002 2h2m10-8V5a2 2 0 00-2-2H9c-.551 0-1.05.223-1.412.584M7 7v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17 17v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-4a2 2 0 012-2h4M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PrinterOffIcon;
/* prettier-ignore-end */
