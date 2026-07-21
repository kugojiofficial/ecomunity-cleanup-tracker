/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingFortressIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingFortressIcon(props: BuildingFortressIconProps) {
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
          "M7 21h1a1 1 0 001-1v-1a3 3 0 016 0m3 2h1a1 1 0 001-1V5l-3-2-3 2v6h-4V5L7 3 4 5v15a1 1 0 001 1h2m8-2v1a1 1 0 001 1h2M7 7v.01M7 10v.01M7 13v.01M17 7v.01M17 10v.01M17 13v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingFortressIcon;
/* prettier-ignore-end */
