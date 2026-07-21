/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VaccineBottleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VaccineBottleOffIcon(props: VaccineBottleOffIconProps) {
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
          "M9 5V4a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-4M8.7 8.705a1.807 1.807 0 01-.2.045c-.866.144-1.5.893-1.5 1.77V19a2 2 0 002 2h6a2 2 0 002-2v-2m0-4v-2.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0114 6.98V6m-7 6h5m4 0h1M7 18h10m-6-3h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VaccineBottleOffIcon;
/* prettier-ignore-end */
