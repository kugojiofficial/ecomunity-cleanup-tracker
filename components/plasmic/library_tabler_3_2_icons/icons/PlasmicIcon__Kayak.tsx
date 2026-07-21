/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KayakIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KayakIcon(props: KayakIconProps) {
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
          "M6.414 6.414a2 2 0 000-2.828L5 2.172 2.172 5l1.414 1.414a2 2 0 002.828 0zm11.172 11.172a2 2 0 000 2.828L19 21.828 21.828 19l-1.414-1.414a2 2 0 00-2.828 0zM6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5zm-15.5 10l5 5m1-11l5 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default KayakIcon;
/* prettier-ignore-end */
