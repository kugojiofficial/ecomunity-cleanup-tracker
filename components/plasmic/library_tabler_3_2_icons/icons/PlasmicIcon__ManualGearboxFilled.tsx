/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ManualGearboxFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ManualGearboxFilledIcon(props: ManualGearboxFilledIconProps) {
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
          "M19 3a3 3 0 011 5.829V10a3 3 0 01-3 3h-4v2.171A3.002 3.002 0 119 18l.005-.176A3 3 0 0111 15.17V13H6v2.171A3.001 3.001 0 112 18l.005-.176A3 3 0 014 15.17V8.829A3 3 0 012 6l.005-.176a3 3 0 113.996 3.005L6 11h5V8.83A3 3 0 019 6l.005-.176a3 3 0 113.996 3.005L13 11h4a1 1 0 001-1V8.83A3 3 0 0116 6l.005-.176A3 3 0 0119 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ManualGearboxFilledIcon;
/* prettier-ignore-end */
