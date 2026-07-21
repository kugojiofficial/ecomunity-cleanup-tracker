/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SitemapOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SitemapOffIcon(props: SitemapOffIconProps) {
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
          "M3 17a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm16-2a2 2 0 012 2m-.591 3.42c-.362.358-.86.58-1.409.58h-2a2 2 0 01-2-2v-2c0-.549.221-1.046.579-1.407M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2m-7 6v-1a2 2 0 012-2h4m4 0a2 2 0 012 2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SitemapOffIcon;
/* prettier-ignore-end */
