/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MilitaryAwardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MilitaryAwardIcon(props: MilitaryAwardIconProps) {
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
        d={"M8 13a4 4 0 108 0 4 4 0 00-8 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.5 10.5L7.5 8H2l2.48 5.788A2 2 0 006.32 15H8.5m7-4.5l1-2.5H22l-2.48 5.788A2 2 0 0117.68 15H15.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MilitaryAwardIcon;
/* prettier-ignore-end */
