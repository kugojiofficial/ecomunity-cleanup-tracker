/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoneIcon(props: BoneIconProps) {
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
          "M15 3a3 3 0 013 3 3 3 0 11-2.12 5.122l-4.758 4.758a3 3 0 11-5.117 2.297V18h-.176a3 3 0 112.298-5.115l4.758-4.758a3 3 0 012.12-5.122L15 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoneIcon;
/* prettier-ignore-end */
