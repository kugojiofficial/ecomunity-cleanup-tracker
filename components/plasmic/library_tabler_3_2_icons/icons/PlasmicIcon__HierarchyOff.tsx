/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HierarchyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HierarchyOffIcon(props: HierarchyOffIconProps) {
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
          "M10 5a2 2 0 104 0 2 2 0 00-4 0zM3 19a2 2 0 104 0 2 2 0 00-4 0zm14.585-1.413a2 2 0 002.813 2.843"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.5 17.5L12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HierarchyOffIcon;
/* prettier-ignore-end */
