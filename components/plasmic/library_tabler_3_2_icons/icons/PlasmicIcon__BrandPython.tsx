/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPythonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPythonIcon(props: BrandPythonIconProps) {
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
          "M12 9H5a2 2 0 00-2 2v4a2 2 0 002 2h3m4-2h7a2 2 0 002-2V9a2 2 0 00-2-2h-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 9V5a2 2 0 012-2h4a2 2 0 012 2v5a2 2 0 01-2 2h-4a2 2 0 00-2 2v5a2 2 0 002 2h4a2 2 0 002-2v-4m-5-9v.01M13 18v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPythonIcon;
/* prettier-ignore-end */
