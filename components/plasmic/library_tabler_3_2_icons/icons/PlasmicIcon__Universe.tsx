/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UniverseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UniverseIcon(props: UniverseIconProps) {
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
          "M7.027 11.477a5 5 0 105.496-4.45 4.951 4.951 0 00-3.088.681M5.636 5.636a9 9 0 103.555-2.188"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 5a1 1 0 102 0 1 1 0 00-2 0zm-6 7a1 1 0 102 0 1 1 0 00-2 0zm-3 4a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UniverseIcon;
/* prettier-ignore-end */
