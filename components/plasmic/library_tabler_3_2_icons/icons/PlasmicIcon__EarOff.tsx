/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EarOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EarOffIcon(props: EarOffIconProps) {
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
          "M6 10c0-1.146.277-2.245.78-3.219m1.792-2.208A7 7 0 0119 13.6c-.198.264-.41.519-.633.762m-2.045 1.96A8 8 0 0015 18.6 4.5 4.5 0 018.2 20m3.22-12.586a3 3 0 014.131 4.13M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EarOffIcon;
/* prettier-ignore-end */
