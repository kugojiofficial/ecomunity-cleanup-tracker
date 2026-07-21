/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BottleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BottleIcon(props: BottleIconProps) {
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
        d={"M10 5h4V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 3.5c0 1.626.507 3.212 1.45 4.537l.05.07a8.093 8.093 0 011.5 4.694V19a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.2c0-1.682.524-3.322 1.5-4.693l.05-.07A7.823 7.823 0 0010 3.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 14.803A2.4 2.4 0 008 14a2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 011-.805"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BottleIcon;
/* prettier-ignore-end */
