/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAirbnbIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAirbnbIcon(props: BrandAirbnbIconProps) {
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
          "M12 18.5c-1.506-1.965-3-4-3-5.5 0-2 1-3 3-3s3 1 3 3c0 1.5-1.494 3.535-3 5.5zm0 0c1 1 1.5 1.5 2.5 2s2.5 1 4.5-.5 1.5-3.5.5-6-2.333-5.5-5-9.5C13.666 3.5 13 3 11.997 3c-1 0-1.623.45-2.497 1.5-2.667 4-4 7-5 9.5S3 18.5 5 20s3.5 1 4.5.5 1.5-1 2.5-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAirbnbIcon;
/* prettier-ignore-end */
