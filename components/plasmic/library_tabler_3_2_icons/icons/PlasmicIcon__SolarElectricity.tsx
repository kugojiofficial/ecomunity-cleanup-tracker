/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SolarElectricityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SolarElectricityIcon(props: SolarElectricityIconProps) {
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
          "M4 6.28v11.44a1 1 0 001.243.97l6-1.5a1 1 0 00.757-.97V7.78a1 1 0 00-.757-.97l-6-1.5A1 1 0 004 6.28zM8 6v12m4-6H4m16-5l-3 5h4l-3 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SolarElectricityIcon;
/* prettier-ignore-end */
