/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PackageImportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PackageImportIcon(props: PackageImportIconProps) {
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
          "M12 21l-8-4.5v-9L12 3l8 4.5V12m-8 0l8-4.5M12 12v9m0-9L4 7.5M22 18h-7m3-3l-3 3 3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PackageImportIcon;
/* prettier-ignore-end */
