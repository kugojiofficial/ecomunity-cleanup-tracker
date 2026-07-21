/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGatsbyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGatsbyIcon(props: BrandGatsbyIconProps) {
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
          "M3.296 14.297l6.407 6.407a9.019 9.019 0 01-6.325-6.116l-.082-.291zM16 13h5c-.41 3.603-3.007 6.59-6.386 7.614L3.386 9.385A9 9 0 0119.046 6.4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGatsbyIcon;
/* prettier-ignore-end */
