/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDeezerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDeezerIcon(props: BrandDeezerIconProps) {
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
          "M3 16.5h2v.5H3v-.5zm5 0h2.5v.5H8v-.5zm8 .5h-2.5v-.5H16v.5zm5.5 0H19v-.5h2.5v.5zm0-4H19v.5h2.5V13zm0-3.5H19v.5h2.5v-.5zm0-3.5H19v.5h2.5V6zM16 13h-2.5v.5H16V13zm-8 .5h2.5V13H8v.5zm0-4h2.5v.5H8v-.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDeezerIcon;
/* prettier-ignore-end */
