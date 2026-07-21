/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessIcon(props: BrightnessIconProps) {
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
          "M3 12a9 9 0 1018.001 0A9 9 0 003 12zm9-9v18m0-12l4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrightnessIcon;
/* prettier-ignore-end */
