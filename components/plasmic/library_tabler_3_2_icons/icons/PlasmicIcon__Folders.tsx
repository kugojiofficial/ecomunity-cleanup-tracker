/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FoldersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FoldersIcon(props: FoldersIconProps) {
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
          "M9 4h3l2 2h5a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17 17v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FoldersIcon;
/* prettier-ignore-end */
