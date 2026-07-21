/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingCartHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingCartHeartIcon(props: ShoppingCartHeartIconProps) {
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
        d={"M10 17H6V3H4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 5l14 1-.717 5.016M11.5 13H6m12 9l3.35-3.284a2.143 2.143 0 00.005-3.071 2.242 2.242 0 00-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 00-3.128-.006 2.143 2.143 0 00-.006 3.071L18 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShoppingCartHeartIcon;
/* prettier-ignore-end */
