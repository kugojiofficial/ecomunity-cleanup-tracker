/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingEstateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingEstateIcon(props: BuildingEstateIconProps) {
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
          "M3 21h18m-2 0v-4m0 0a2 2 0 002-2v-2a2 2 0 00-4 0v2a2 2 0 002 2zm-5 4V7a3 3 0 00-3-3H7a3 3 0 00-3 3v14m5-4v4m-1-8h2M8 9h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingEstateIcon;
/* prettier-ignore-end */
