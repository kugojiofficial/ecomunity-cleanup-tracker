/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandMixpanelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandMixpanelIcon(props: BrandMixpanelIconProps) {
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
          "M2 12a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm17 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-8 0a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandMixpanelIcon;
/* prettier-ignore-end */
