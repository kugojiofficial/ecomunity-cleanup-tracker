/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAwsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAwsIcon(props: BrandAwsIconProps) {
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
          "M17 18.5a15.199 15.199 0 01-7.37 1.44A14.62 14.62 0 013 17m16.5 4c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1M3 11V6.5a1.5 1.5 0 013 0V11M3 9h3m3-4l1.2 6L12 7l1.8 4L15 5m3 5.25c0 .414.336.75.75.75H20a1 1 0 001-1V9a1 1 0 00-1-1h-1a1 1 0 01-1-1V6a1 1 0 011-1h1.25a.75.75 0 01.75.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAwsIcon;
/* prettier-ignore-end */
