/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MilkOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MilkOffIcon(props: MilkOffIconProps) {
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
          "M10 6h6V4a1 1 0 00-1-1H9a1 1 0 00-1 1m8 2l1.094 1.759a6 6 0 01.906 3.17V14m0 4v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-8.071a6 6 0 01.906-3.17l.327-.525"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 16a2 2 0 104 0 2 2 0 00-4 0zM3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MilkOffIcon;
/* prettier-ignore-end */
