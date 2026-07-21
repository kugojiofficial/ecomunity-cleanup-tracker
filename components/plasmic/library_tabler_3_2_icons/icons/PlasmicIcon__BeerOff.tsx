/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BeerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BeerOffIcon(props: BeerOffIconProps) {
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
          "M7 7v1.111c0 1.242.29 2.467.845 3.578l.31.622A8 8 0 019 15.889V20h6v-4.111c0-.284.015-.568.045-.85m.953-3.035l.157-.315A8 8 0 0017 8.111V4H8M7 8h1m4 0h5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BeerOffIcon;
/* prettier-ignore-end */
