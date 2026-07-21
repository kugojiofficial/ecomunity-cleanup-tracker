/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCoinbaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCoinbaseIcon(props: BrandCoinbaseIconProps) {
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
          "M12.95 22c-4.503 0-8.445-3.04-9.61-7.413-1.165-4.373.737-8.988 4.638-11.25a9.906 9.906 0 0112.008 1.598l-3.335 3.367a5.185 5.185 0 00-7.354.013 5.252 5.252 0 000 7.393 5.184 5.184 0 007.354.013L20 19.088A9.885 9.885 0 0112.95 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCoinbaseIcon;
/* prettier-ignore-end */
