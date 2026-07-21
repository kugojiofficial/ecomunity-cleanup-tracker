/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VersionsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VersionsFilledIcon(props: VersionsFilledIconProps) {
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
          "M18 4h-6a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V7a3 3 0 00-3-3zM7 6a1 1 0 01.993.883L8 7v10a1 1 0 01-1.993.117L6 17V7a1 1 0 011-1zM4 7a1 1 0 01.993.883L5 8v8a1 1 0 01-1.993.117L3 16V8a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VersionsFilledIcon;
/* prettier-ignore-end */
