/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandFeedlyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandFeedlyIcon(props: BrandFeedlyIconProps) {
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
          "M7.833 12.278l4.445-4.445M10.055 14.5l2.223-2.222m0 4.444l.555-.555m6.995-1.339a4 4 0 000-5.656l-5-5a4 4 0 00-5.656 0l-5 5a4 4 0 000 5.656L10.343 21h3.314l6.171-6.172z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandFeedlyIcon;
/* prettier-ignore-end */
