/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PackageOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PackageOffIcon(props: PackageOffIconProps) {
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
          "M8.812 4.793L12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25m8.32 4.32L20 7.5M12 12v9m0-9L4 7.5m12-2.25l-4.35 2.447M9.086 9.139L8 9.75M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PackageOffIcon;
/* prettier-ignore-end */
