/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CakeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CakeOffIcon(props: CakeOffIconProps) {
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
        d={"M21 17v-5a3 3 0 00-3-3h-5M9 9H6a3 3 0 00-3 3v8h17"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 14.803A2.4 2.4 0 004 15a2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1m4 0a2.401 2.401 0 002 1c.35.007.692-.062 1-.197M10.172 6.188c.07-.158.163-.31.278-.451L12 4l1.465 1.638a2 2 0 01-.65 3.19M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CakeOffIcon;
/* prettier-ignore-end */
