/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellShareIcon(props: BellShareIconProps) {
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
          "M12.5 17H4a4 4 0 002-3v-3a7 7 0 014-6 2 2 0 114 0 7 7 0 014 6v2m-9 4v1a3 3 0 003 3m4 1l5-5m0 4.5V17h-4.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BellShareIcon;
/* prettier-ignore-end */
