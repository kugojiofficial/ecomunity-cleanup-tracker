/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlobeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlobeFilledIcon(props: GlobeFilledIconProps) {
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
        d={"M11 4a5 5 0 11-4.995 5.217L6 9l.005-.217A5 5 0 0111 4z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.133 1.502a1 1 0 011.365-.369A9.015 9.015 0 115.094 15.755a1 1 0 111.312-1.51 7.016 7.016 0 108.096-11.378 1 1 0 01-.369-1.365z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11 16a1 1 0 01.993.883L12 17v4a1 1 0 01-1.993.117L10 21v-4a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M15 20a1 1 0 01.117 1.993L15 22H7a1 1 0 01-.117-1.993L7 20h8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlobeFilledIcon;
/* prettier-ignore-end */
