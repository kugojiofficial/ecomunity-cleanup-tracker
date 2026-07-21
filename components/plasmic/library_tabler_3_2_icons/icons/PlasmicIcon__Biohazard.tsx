/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BiohazardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BiohazardIcon(props: BiohazardIconProps) {
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
        d={"M10 12a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 01-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 017.737-3.693m6.513 8.443a4.749 4.749 0 01-4.69-5.503h-.06m1.764-2.944a4.75 4.75 0 017.731 3.477v.217m-11.195-3.813a4.75 4.75 0 01-1.828-7.624l.164-.172m6.718 0a4.75 4.75 0 01-1.665 7.798"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BiohazardIcon;
/* prettier-ignore-end */
