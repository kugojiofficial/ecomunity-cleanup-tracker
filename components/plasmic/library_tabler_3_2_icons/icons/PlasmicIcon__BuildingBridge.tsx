/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingBridgeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingBridgeIcon(props: BuildingBridgeIconProps) {
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
          "M6 5v14M18 5v14M2 15h20M3 8a7.5 7.5 0 003-2 6.5 6.5 0 0012 0 7.5 7.5 0 003 2m-9 2v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingBridgeIcon;
/* prettier-ignore-end */
