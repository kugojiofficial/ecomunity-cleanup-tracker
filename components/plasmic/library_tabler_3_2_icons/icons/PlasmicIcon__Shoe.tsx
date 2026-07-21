/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoeIcon(props: ShoeIconProps) {
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
          "M4 6h5.426a1 1 0 01.863.496l1.064 1.823a3 3 0 001.896 1.407l4.677 1.114A4 4 0 0121 14.73V17a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm10 7l1-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 18v-1a4 4 0 00-4-4H3m7-1l1.5-3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShoeIcon;
/* prettier-ignore-end */
