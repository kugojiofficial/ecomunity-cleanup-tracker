/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BorderInnerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BorderInnerIcon(props: BorderInnerIconProps) {
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
          "M4 12h16m-8-8v16M4 4v.01M8 4v.01M16 4v.01M20 4v.01M4 8v.01M20 8v.01M4 16v.01M20 16v.01M4 20v.01M8 20v.01m8-.01v.01m4-.01v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BorderInnerIcon;
/* prettier-ignore-end */
