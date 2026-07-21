/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SolarPanelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SolarPanelIcon(props: SolarPanelIconProps) {
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
          "M4.28 14h15.44a1 1 0 00.97-1.243l-1.5-6A1 1 0 0018.22 6H5.78a1 1 0 00-.97.757l-1.5 6A1 1 0 004.28 14zM4 10h16M10 6l-1 8m5-8l1 8m-3 0v4m-5 0h10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SolarPanelIcon;
/* prettier-ignore-end */
