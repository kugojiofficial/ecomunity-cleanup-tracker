/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrentLocationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrentLocationOffIcon(props: CurrentLocationOffIconProps) {
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
          "M14.685 10.661c-.3-.6-.795-1.086-1.402-1.374m-3.397.584a3 3 0 104.24 4.245"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.357 6.33a8 8 0 1011.301 11.326m1.642-2.378A8 8 0 008.703 4.709M12 2v2m0 16v2m8-10h2M2 12h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrentLocationOffIcon;
/* prettier-ignore-end */
