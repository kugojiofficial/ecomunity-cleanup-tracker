/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MilkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MilkIcon(props: MilkIconProps) {
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
          "M8 6h8V4a1 1 0 00-1-1H9a1 1 0 00-1 1v2zm8 0l1.094 1.759a6 6 0 01.906 3.17V19a2 2 0 01-2 2H8a2 2 0 01-2-2v-8.071a6 6 0 01.906-3.17L8 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 16a2 2 0 104 0 2 2 0 00-4 0zm0-6h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MilkIcon;
/* prettier-ignore-end */
