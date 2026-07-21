/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PizzaOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PizzaOffIcon(props: PizzaOffIconProps) {
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
          "M10.313 6.277L12 3l5.34 10.376m2.477 6.463A19.093 19.093 0 0112 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.38 15.866a14.94 14.94 0 006.815 1.634c1.56 0 3.105-.24 4.582-.713M11 14v-.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PizzaOffIcon;
/* prettier-ignore-end */
