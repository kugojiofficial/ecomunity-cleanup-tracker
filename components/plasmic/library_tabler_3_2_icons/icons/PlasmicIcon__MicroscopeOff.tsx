/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MicroscopeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MicroscopeOffIcon(props: MicroscopeOffIconProps) {
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
          "M5 21h14M6 18h2m-1 0v3m3-11l-1 1 3 3 1-1m2-2l3-3-3-3-3 3m-1.5 4.5L9 14m8-11l3 3m-8 15a6 6 0 005.457-3.505m.441-3.599a6 6 0 00-2.183-3.608M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MicroscopeOffIcon;
/* prettier-ignore-end */
