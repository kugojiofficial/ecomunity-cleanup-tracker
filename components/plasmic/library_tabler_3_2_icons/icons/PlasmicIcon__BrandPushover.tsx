/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPushoverIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPushoverIcon(props: BrandPushoverIconProps) {
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
          "M6.16 10.985C5.33 9.05 7.69 3 14.355 3 17.688 3 19 4.382 19 6.9c0 2.597-2.612 6.1-9 6.1m2.5-7L7 21"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPushoverIcon;
/* prettier-ignore-end */
