/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandOffIcon(props: HandOffIconProps) {
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
          "M3 3l18 18M8 13.5V8m.44-3.562A1.5 1.5 0 0111 5.5m0 0V7m0-1.5v-2a1.5 1.5 0 113 0V10m-3 1.008V12m3-6.5a1.5 1.5 0 113 0V12m0-4.5a1.5 1.5 0 113 0V16a6 6 0 01-6 6h-2c-2.114-.292-3.956-1.397-5-3l-2.7-5.25a1.7 1.7 0 012.75-2l.9 1.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HandOffIcon;
/* prettier-ignore-end */
