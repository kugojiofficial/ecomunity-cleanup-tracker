/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGoogleFitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGoogleFitIcon(props: BrandGoogleFitIconProps) {
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
          "M12 9.314L9.657 6.97a3.314 3.314 0 00-4.686 4.686L7.314 14m0 0L12 18.686l7.03-7.03a3.314 3.314 0 00-4.687-4.685L7.314 14z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGoogleFitIcon;
/* prettier-ignore-end */
