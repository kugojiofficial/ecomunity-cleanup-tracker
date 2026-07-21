/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SunElectricityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SunElectricityIcon(props: SunElectricityIconProps) {
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
          "M12 16a4 4 0 110-8m-9 4h1m8-9v1m0 16v1M5.6 5.6l.7.7m0 11.4l-.7.7M20 7l-3 5h4l-3 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SunElectricityIcon;
/* prettier-ignore-end */
