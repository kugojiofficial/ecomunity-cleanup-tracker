/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartOffIcon(props: HeartOffIconProps) {
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
          "M3 3l18 18m-3-7l1.5-1.428A5 5 0 1012 6c-.95-1.273-2.44-2-4-2m8 12l-4 4-7.5-7.428a5 5 0 01-1.288-5.068A4.976 4.976 0 015 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HeartOffIcon;
/* prettier-ignore-end */
