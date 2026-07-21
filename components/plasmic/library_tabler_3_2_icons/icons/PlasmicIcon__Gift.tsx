/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GiftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GiftIcon(props: GiftIconProps) {
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
          "M3 9a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm9-1v13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7m2.5-4a2.5 2.5 0 110-5c.965-.017 1.91.451 2.713 1.343C11.015 5.235 11.638 6.51 12 8c.362-1.49.985-2.765 1.787-3.657.803-.892 1.748-1.36 2.713-1.343a2.5 2.5 0 010 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GiftIcon;
/* prettier-ignore-end */
