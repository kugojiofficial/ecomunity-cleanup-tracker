/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessUpIcon(props: BrightnessUpIconProps) {
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
          "M9 12a3 3 0 106 0 3 3 0 00-6 0zm3-7V3m5 4l1.4-1.4M19 12h2m-4 5l1.4 1.4M12 19v2m-5-4l-1.4 1.4M6 12H4m3-5L5.6 5.6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrightnessUpIcon;
/* prettier-ignore-end */
