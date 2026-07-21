/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingCommunityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingCommunityIcon(props: BuildingCommunityIconProps) {
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
          "M13 21v-7L8 9l-5 5v7h5m5 0H8m5 0h8V4a1 1 0 00-1-1H10a1 1 0 00-1 1v6M8 21v-4m5-10v.01M17 7v.01M17 11v.01M17 15v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingCommunityIcon;
/* prettier-ignore-end */
