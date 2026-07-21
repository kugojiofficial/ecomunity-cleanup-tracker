/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandRumbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandRumbleIcon(props: BrandRumbleIconProps) {
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
          "M19.993 9.108c.383.4.687.863.893 1.368a4.195 4.195 0 01.006 3.166 4.37 4.37 0 01-.887 1.372 20.243 20.243 0 01-2.208 2 20.623 20.623 0 01-2.495 1.669 21.32 21.32 0 01-5.622 2.202 4.213 4.213 0 01-3.002-.404 3.98 3.98 0 01-1.163-.967 3.796 3.796 0 01-.695-1.312C3.621 14.3 3.798 9.89 4.954 5.972c.609-2.057 2.643-3.349 4.737-2.874 3.88.88 7.52 3.147 10.302 6.01z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.044 13.034c.67-.505.67-1.489 0-2.01a14.818 14.818 0 00-1.498-1.044 15.792 15.792 0 00-1.62-.865c-.77-.35-1.63.139-1.753.973a15.385 15.385 0 00-.1 3.786 1.232 1.232 0 001.715 1.027 14.462 14.462 0 003.256-1.862v-.005z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandRumbleIcon;
/* prettier-ignore-end */
