/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwordsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwordsIcon(props: SwordsIconProps) {
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
          "M21 3v5l-11 9-4 4-3-3 4-4 9-11h5zM5 13l6 6m3.32-1.68L18 21l3-3-3.365-3.365M10 5.5L8 3H3v5l3 2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SwordsIcon;
/* prettier-ignore-end */
