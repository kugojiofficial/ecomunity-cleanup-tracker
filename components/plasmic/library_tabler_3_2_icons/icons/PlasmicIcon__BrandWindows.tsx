/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandWindowsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandWindowsIcon(props: BrandWindowsIconProps) {
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
          "M17.8 20l-12-1.5c-1-.1-1.8-.9-1.8-1.9V7.4c0-1 .8-1.8 1.8-1.9l12-1.5c1.2-.1 2.2.8 2.2 1.9V18c0 1.2-1.1 2.1-2.2 1.9v.1zM12 5v14m-8-7h16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandWindowsIcon;
/* prettier-ignore-end */
