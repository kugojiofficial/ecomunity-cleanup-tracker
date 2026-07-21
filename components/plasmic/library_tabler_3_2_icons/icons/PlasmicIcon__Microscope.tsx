/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MicroscopeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MicroscopeIcon(props: MicroscopeIconProps) {
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
          "M5 21h14M6 18h2m-1 0v3m2-10l3 3 6-6-3-3-6 6zm1.5 1.5L9 14m8-11l3 3m-8 15a6 6 0 003.715-10.712"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MicroscopeIcon;
/* prettier-ignore-end */
