/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DashboardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DashboardOffIcon(props: DashboardOffIconProps) {
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
        d={"M11.175 11.178a2 2 0 102.653 2.634M14.5 10.5l1-1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.621 4.612a9 9 0 0111.721 11.72m-1.516 2.488A9.01 9.01 0 0117.6 20H6.4a9 9 0 01-.268-13.87M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DashboardOffIcon;
/* prettier-ignore-end */
