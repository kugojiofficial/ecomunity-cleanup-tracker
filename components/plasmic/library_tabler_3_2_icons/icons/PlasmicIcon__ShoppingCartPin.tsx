/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingCartPinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingCartPinIcon(props: ShoppingCartPinIconProps) {
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
        d={"M4 19a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 17H6V3H4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 5l14 1-.716 5.011M14 13H6m15.121 7.121a3 3 0 10-4.242 0c.418.419 1.125 1.045 2.121 1.879 1.051-.89 1.759-1.516 2.121-1.879zM19 18v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShoppingCartPinIcon;
/* prettier-ignore-end */
