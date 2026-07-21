/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BandageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BandageIcon(props: BandageIconProps) {
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
          "M14 12v.01M10 12v.01M12 10v.01M12 14v.01M4.5 12.5l8-8a4.95 4.95 0 117 7l-8 8a4.95 4.95 0 01-7-7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BandageIcon;
/* prettier-ignore-end */
