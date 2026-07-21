/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClothesRackOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClothesRackOffIcon(props: ClothesRackOffIconProps) {
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
          "M10 5a2 2 0 104 0 2 2 0 00-4 0zm2 2v1m0 4v9m-3 0h6M7.757 9.243a6 6 0 003.129 1.653m3.578-.424a6.001 6.001 0 001.779-1.229M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ClothesRackOffIcon;
/* prettier-ignore-end */
