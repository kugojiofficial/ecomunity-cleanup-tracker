/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BiohazardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BiohazardOffIcon(props: BiohazardOffIconProps) {
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
          "M10.586 10.586a2.002 2.002 0 001.417 3.434 1.999 1.999 0 001.419-.614"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 01-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 017.737-3.693"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.745 19.495a4.749 4.749 0 01-4.69-5.503h-.06m2.538-3.454a4.75 4.75 0 016.957 3.987v.217m-11.195-3.813a4.75 4.75 0 01-2.988-3.64m.66-3.324a4.75 4.75 0 01.5-.66l.164-.172m6.718 0a4.75 4.75 0 01-.836 7.385M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BiohazardOffIcon;
/* prettier-ignore-end */
