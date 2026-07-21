/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartsIcon(props: HeartsIconProps) {
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
        d={"M14.017 18L12 20l-7.5-7.428A5 5 0 1112 6.006a5 5 0 018.153 5.784"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.99 20l4.197-4.223a2.81 2.81 0 000-3.948 2.748 2.748 0 00-3.91-.007l-.28.282-.279-.283a2.748 2.748 0 00-3.91-.007 2.81 2.81 0 00-.007 3.948L15.983 20h.007z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HeartsIcon;
/* prettier-ignore-end */
