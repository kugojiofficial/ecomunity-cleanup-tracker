/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyPaangaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyPaangaIcon(props: CurrencyPaangaIconProps) {
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
        d={"M21 6h-4a3 3 0 000 6h1a3 3 0 010 6h-4m3 2v-2m1-12V4M3 6h8M7 6v12"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyPaangaIcon;
/* prettier-ignore-end */
