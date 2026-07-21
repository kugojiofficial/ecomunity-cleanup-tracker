/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSublimeTextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSublimeTextIcon(props: BrandSublimeTextIconProps) {
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
          "M19 8L5 12.5V7l14-4.5V8zm0 9L5 21.5V16l14-4.5V17zm0-5.5L5 7m0 5.5L19 17"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSublimeTextIcon;
/* prettier-ignore-end */
