/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBumbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBumbleIcon(props: BrandBumbleIconProps) {
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
          "M7 12h10M9 8h6m-5 8h4m2.268-13H7.732a1.46 1.46 0 00-1.268.748l-4.268 7.509a1.507 1.507 0 000 1.486l4.268 7.509c.26.462.744.747 1.268.748h8.536a1.46 1.46 0 001.268-.748l4.268-7.509a1.507 1.507 0 000-1.486l-4.268-7.509A1.46 1.46 0 0016.268 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBumbleIcon;
/* prettier-ignore-end */
