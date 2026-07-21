/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertTriangleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlertTriangleOffIcon(props: AlertTriangleOffIconProps) {
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
          "M21.998 17.997a1.913 1.913 0 00-.255-.872L13.637 3.591a1.913 1.913 0 00-3.274 0l-1.04 1.736M7.83 7.82l-5.573 9.304a1.914 1.914 0 001.636 2.871H20M12 16h.01M3 3l18 18M12 7v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlertTriangleOffIcon;
/* prettier-ignore-end */
