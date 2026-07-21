/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudFogIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudFogIcon(props: CloudFogIconProps) {
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
          "M7 16a4.815 4.815 0 01-3.327-1.318A4.403 4.403 0 012.295 11.5c0-1.194.496-2.338 1.378-3.182A4.815 4.815 0 017 7c.295-1.313 1.157-2.467 2.397-3.207 1.24-.741 2.755-1.008 4.214-.743 1.459.265 2.74 1.041 3.564 2.157.823 1.116 1.12 2.48.825 3.793h1a3.5 3.5 0 110 7H7zm-2 4h14"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudFogIcon;
/* prettier-ignore-end */
