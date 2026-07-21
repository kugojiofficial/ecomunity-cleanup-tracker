/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGooglePlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGooglePlayIcon(props: BrandGooglePlayIconProps) {
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
          "M4 3.71v16.58a.7.7 0 001.05.606l14.622-8.42a.55.55 0 000-.953L5.05 3.104A.7.7 0 004 3.71zM15 9L4.5 20.5m0-17L15 15"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGooglePlayIcon;
/* prettier-ignore-end */
