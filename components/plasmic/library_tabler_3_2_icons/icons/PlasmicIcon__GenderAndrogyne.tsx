/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GenderAndrogyneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GenderAndrogyneIcon(props: GenderAndrogyneIconProps) {
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
        d={"M13 11l6-6M4 15a5 5 0 1010 0 5 5 0 00-10 0zm15-6V5h-4m1.5 5.5l-3-3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GenderAndrogyneIcon;
/* prettier-ignore-end */
