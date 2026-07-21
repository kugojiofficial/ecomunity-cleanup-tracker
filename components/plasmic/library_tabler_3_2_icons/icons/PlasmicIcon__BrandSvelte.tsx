/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSvelteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSvelteIcon(props: BrandSvelteIconProps) {
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
          "M15 8l-5 3 .821-.495c1.86-1.15 4.412-.49 5.574 1.352a3.91 3.91 0 01-1.264 5.42l-5.053 3.126c-1.86 1.151-4.312.591-5.474-1.251a3.91 3.91 0 011.263-5.42l.26-.16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 17l5-3-.822.496c-1.86 1.151-4.411.491-5.574-1.351a3.91 3.91 0 011.264-5.42l5.054-3.127c1.86-1.15 4.311-.59 5.474 1.252a3.91 3.91 0 01-1.264 5.42l-.26.16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSvelteIcon;
/* prettier-ignore-end */
