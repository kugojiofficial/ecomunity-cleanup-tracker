/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatteryEcoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatteryEcoIcon(props: BatteryEcoIconProps) {
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
          "M4 9a2 2 0 012-2h11a2 2 0 012 2v.5a.5.5 0 00.5.5.5.5 0 01.5.5v3a.5.5 0 01-.5.5.5.5 0 00-.5.5v.5a2 2 0 01-2 2h-5.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 16.143C3 13.303 5.09 11 7.667 11H10v.857C10 14.697 7.91 17 5.333 17H3v-.857zM3 20v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BatteryEcoIcon;
/* prettier-ignore-end */
