/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoonOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoonOffIcon(props: MoonOffIconProps) {
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
          "M7.962 3.949A8.97 8.97 0 0112 2.992V3h.393a7.478 7.478 0 00-2.07 3.308m-.141 3.84c.186.823.514 1.626.989 2.373a7.49 7.49 0 004.586 3.268m3.893-.11c.223-.067.444-.144.663-.233a9.083 9.083 0 01-.274.597m-1.695 2.337A9.001 9.001 0 115.634 5.631M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoonOffIcon;
/* prettier-ignore-end */
