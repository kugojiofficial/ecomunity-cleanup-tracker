/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChefHatOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChefHatOffIcon(props: ChefHatOffIconProps) {
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
          "M8.72 4.712a4 4 0 017.19 1.439A4 4 0 0118 13.874V14m0 4v3H6v-7.126a4 4 0 01.081-7.796m.08 10.931L17 17M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChefHatOffIcon;
/* prettier-ignore-end */
