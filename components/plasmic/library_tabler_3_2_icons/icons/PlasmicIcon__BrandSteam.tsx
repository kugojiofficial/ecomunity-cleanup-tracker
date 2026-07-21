/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSteamIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSteamIcon(props: BrandSteamIconProps) {
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
          "M16.5 5a4.5 4.5 0 11-.653 8.953L11.5 16.962V17a3 3 0 01-2.824 3H8.5a3 3 0 01-2.94-2.402L3 16.5V13l3.51 1.755a2.99 2.99 0 012.834-.635l2.727-3.818A4.502 4.502 0 0116.5 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M16.5 10.5a1 1 0 100-2 1 1 0 000 2z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSteamIcon;
/* prettier-ignore-end */
