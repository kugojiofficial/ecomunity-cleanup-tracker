/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RechargingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RechargingIcon(props: RechargingIconProps) {
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
          "M7.038 4.5a9 9 0 00-2.495 2.47m-1.357 3.239a9 9 0 000 3.508M4.5 16.962a9.001 9.001 0 002.47 2.495m3.239 1.357a9.001 9.001 0 003.5 0m3.253-1.314a9.002 9.002 0 002.495-2.47m1.357-3.239a9 9 0 000-3.508M19.5 7.038a9.001 9.001 0 00-2.47-2.495m-3.239-1.357a9 9 0 00-3.508-.02M12 8l-2 4h4l-2 4m0 5a9 9 0 000-18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RechargingIcon;
/* prettier-ignore-end */
