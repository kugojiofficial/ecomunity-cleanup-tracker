/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BubbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BubbleIcon(props: BubbleIconProps) {
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
          "M12.4 2a6.33 6.33 0 015.491 3.176l.09.162.126.027a6.336 6.336 0 014.889 5.934l.004.234a6.333 6.333 0 01-6.333 6.334l-.035-.002-.035.05a5.26 5.26 0 01-3.958 2.08L12.4 20c-.481 0-.95-.063-1.404-.19l-.047-.014-3.434 2.061a1 1 0 01-1.509-.743L6 21v-2.434l-.121-.06a3.67 3.67 0 01-1.94-3.042l-.006-.197c0-.243.023-.482.07-.717l.013-.058-.113-.09a5.8 5.8 0 01-2.098-4.218l-.005-.25a5.8 5.8 0 015.8-5.8l.058.001.15-.163a6.32 6.32 0 014.328-1.967L12.4 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BubbleIcon;
/* prettier-ignore-end */
