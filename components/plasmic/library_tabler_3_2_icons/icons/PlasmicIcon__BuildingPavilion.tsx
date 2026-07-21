/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingPavilionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingPavilionIcon(props: BuildingPavilionIconProps) {
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
          "M3 21h7v-3a2 2 0 014 0v3h7M6 21v-9m12 9v-9M6 12h12a3 3 0 003-3c-2.044.057-4.049-.505-5.685-1.596C13.68 6.314 12.51 4.76 12 3c-.51 1.76-1.68 3.313-3.315 4.404C7.049 8.494 5.044 9.057 3 9a3 3 0 003 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingPavilionIcon;
/* prettier-ignore-end */
