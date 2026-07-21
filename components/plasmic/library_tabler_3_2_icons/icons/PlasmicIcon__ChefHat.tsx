/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChefHatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChefHatIcon(props: ChefHatIconProps) {
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
          "M12 3c1.918 0 3.52 1.35 3.91 3.151A4 4 0 0118 13.874V21H6v-7.126a4.002 4.002 0 01-2.121-6.306 4 4 0 014.213-1.417A4 4 0 0112 3zM6.161 17.009L18 17"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChefHatIcon;
/* prettier-ignore-end */
