/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WoodIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WoodIcon(props: WoodIconProps) {
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
          "M6 5.5c0 .663.632 1.299 1.757 1.768C8.883 7.737 10.41 8 12 8c1.591 0 3.117-.263 4.243-.732C17.368 6.798 18 6.163 18 5.5s-.632-1.299-1.757-1.768C15.117 3.263 13.59 3 12 3c-1.591 0-3.117.263-4.243.732C6.632 4.202 6 4.837 6 5.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 5.5v4.626a1.415 1.415 0 011.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 016 12.127V5.5m4 7V14m4 2v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WoodIcon;
/* prettier-ignore-end */
