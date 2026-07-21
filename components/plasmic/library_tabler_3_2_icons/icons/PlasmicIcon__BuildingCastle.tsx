/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingCastleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingCastleIcon(props: BuildingCastleIconProps) {
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
          "M15 19v-2a3 3 0 00-6 0v2a1 1 0 01-1 1H4a1 1 0 01-1-1V5h4v3h3V5h4v3h3V5h4v14a1 1 0 01-1 1h-4a1 1 0 01-1-1zM3 11h18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingCastleIcon;
/* prettier-ignore-end */
