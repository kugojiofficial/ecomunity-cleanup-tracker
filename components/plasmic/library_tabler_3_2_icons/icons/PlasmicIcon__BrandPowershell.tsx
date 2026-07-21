/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPowershellIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPowershellIcon(props: BrandPowershellIconProps) {
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
          "M4.887 20h11.868c.893 0 1.664-.665 1.847-1.592l2.358-12c.212-1.081-.442-2.14-1.462-2.366A1.784 1.784 0 0019.113 4H7.245c-.893 0-1.664.665-1.847 1.592l-2.358 12c-.212 1.081.442 2.14 1.462 2.366.127.028.256.042.385.042z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 8l4 4-6 4m5 0h3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPowershellIcon;
/* prettier-ignore-end */
