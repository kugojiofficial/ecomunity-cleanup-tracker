/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WheelchairOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WheelchairOffIcon(props: WheelchairOffIconProps) {
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
          "M3 16a5 5 0 1010 0 5 5 0 00-10 0zm14.582 1.59a2 2 0 102.833 2.824M14 14h-1.4M6 6v5m0-3h2m4 0h5m-2 0v3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WheelchairOffIcon;
/* prettier-ignore-end */
