/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RibbonHealthIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RibbonHealthIcon(props: RibbonHealthIconProps) {
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
          "M7 21s9.286-9.841 9.286-13.841a3.865 3.865 0 00-1.182-3.008A4.13 4.13 0 0012 3.007 4.13 4.13 0 008.896 4.15a3.864 3.864 0 00-1.182 3.01C7.714 11.16 17 21 17 21"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RibbonHealthIcon;
/* prettier-ignore-end */
