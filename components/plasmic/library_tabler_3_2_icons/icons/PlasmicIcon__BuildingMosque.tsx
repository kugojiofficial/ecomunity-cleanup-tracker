/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingMosqueIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingMosqueIcon(props: BuildingMosqueIconProps) {
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
          "M3 21h7v-2a2 2 0 014 0v2h7M4 21V11m16 10V11M4 16h3v-3h10v3h3m-3-3a5 5 0 10-10 0m14-2.5c0-.329-.077-.653-.224-.947L20 8l-.776 1.553A2.118 2.118 0 0019 10.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5zm-16 0c0-.329-.077-.653-.224-.947L4 8l-.776 1.553A2.118 2.118 0 003 10.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5zM12 2a2 2 0 102 2m-2 2v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingMosqueIcon;
/* prettier-ignore-end */
