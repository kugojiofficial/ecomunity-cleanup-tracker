/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScissorsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScissorsIcon(props: ScissorsIconProps) {
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
          "M3 7a3 3 0 106 0 3 3 0 00-6 0zm0 10a3 3 0 106 0 3 3 0 00-6 0zm5.6-8.4L19 19M8.6 15.4L19 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScissorsIcon;
/* prettier-ignore-end */
