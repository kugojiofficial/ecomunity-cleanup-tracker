/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGoogleMapsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGoogleMapsIcon(props: BrandGoogleMapsIconProps) {
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
          "M9.5 9.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm-3.072 2.994l7.314-9.252m-3.74 4.693L7.065 5.39m10.628 1.203l-8.336 9.979"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.591 6.376c.472.907.715 1.914.709 2.935a7.263 7.263 0 01-.72 3.18 19.088 19.088 0 01-2.089 3c-.784.933-1.49 1.93-2.11 2.98-.314.62-.568 1.27-.757 1.938-.121.36-.277.591-.622.591-.315 0-.463-.136-.626-.593a10.598 10.598 0 00-.779-1.978c-.425-.73-.9-1.428-1.423-2.091-.877-1.184-2.179-2.535-2.853-4.071A7.077 7.077 0 015.7 9.3a6.226 6.226 0 011.476-4.055A6.25 6.25 0 0111.987 3a6.462 6.462 0 011.918.284 6.255 6.255 0 013.686 3.092z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGoogleMapsIcon;
/* prettier-ignore-end */
