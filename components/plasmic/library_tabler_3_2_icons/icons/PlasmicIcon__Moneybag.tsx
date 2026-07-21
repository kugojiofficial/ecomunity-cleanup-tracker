/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneybagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoneybagIcon(props: MoneybagIconProps) {
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
          "M9.5 3h5A1.5 1.5 0 0116 4.5 3.5 3.5 0 0112.5 8h-1A3.5 3.5 0 018 4.5 1.5 1.5 0 019.5 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4 17v-1a8 8 0 0116 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoneybagIcon;
/* prettier-ignore-end */
