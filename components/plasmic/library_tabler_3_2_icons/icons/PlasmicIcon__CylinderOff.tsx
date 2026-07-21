/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CylinderOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CylinderOffIcon(props: CylinderOffIconProps) {
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
          "M5.23 5.233C5.08 5.478 5 5.735 5 6c0 1.131 1.461 2.117 3.62 2.628m4.357.343C16.381 8.767 19 7.515 19 6c0-1.657-3.134-3-7-3-1.645 0-3.158.243-4.353.65"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 6v12c0 1.657 3.134 3 7 3 3.245 0 5.974-.946 6.767-2.23M19 15V6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CylinderOffIcon;
/* prettier-ignore-end */
