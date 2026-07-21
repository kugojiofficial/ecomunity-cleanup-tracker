/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScanIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScanIcon(props: ScanIconProps) {
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
          "M4 7V6a2 2 0 012-2h2M4 17v1a2 2 0 002 2h2m8-16h2a2 2 0 012 2v1m-4 13h2a2 2 0 002-2v-1M5 12h14"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScanIcon;
/* prettier-ignore-end */
