/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAppstoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAppstoreIcon(props: BrandAppstoreIconProps) {
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
          "M3 12a9 9 0 1018.001 0A9 9 0 003 12zm5 4l1.106-1.99m1.4-2.522L13 7m-6 7h5m2.9 0H17m-1 2l-2.51-4.518m-1.487-2.677l-1-1.805"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAppstoreIcon;
/* prettier-ignore-end */
