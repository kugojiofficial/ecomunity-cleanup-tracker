/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCouchdbIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCouchdbIcon(props: BrandCouchdbIconProps) {
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
          "M6 12h12v-2a2 2 0 012-2 2 2 0 00-2-2H6a2 2 0 00-2 2 2 2 0 012 2v2zm0 3h12M6 18h12m3-7v7M3 11v7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCouchdbIcon;
/* prettier-ignore-end */
