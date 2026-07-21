/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SatelliteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SatelliteOffIcon(props: SatelliteOffIconProps) {
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
          "M7.707 3.707l5.586 5.586M12 12l-1.293 1.293a1 1 0 01-1.414 0L3.707 7.707a1 1 0 010-1.414L5 5m1 5l-3 3 3 3 3-3m1-7l3-3 3 3-3 3m-1 3l1.5 1.5m1 3.5c.69 0 1.316-.28 1.769-.733M15 21c1.654 0 3.151-.67 4.237-1.752m1.507-2.507A6 6 0 0021 15M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SatelliteOffIcon;
/* prettier-ignore-end */
