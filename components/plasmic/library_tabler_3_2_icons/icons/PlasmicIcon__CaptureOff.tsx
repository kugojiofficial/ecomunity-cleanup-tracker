/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaptureOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaptureOffIcon(props: CaptureOffIconProps) {
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
          "M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2c.554 0 1.055-.225 1.417-.589M9.87 9.887a3 3 0 004.255 4.23m.58-3.416a3.012 3.012 0 00-1.4-1.403M4 8V6c0-.548.22-1.044.577-1.405M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CaptureOffIcon;
/* prettier-ignore-end */
