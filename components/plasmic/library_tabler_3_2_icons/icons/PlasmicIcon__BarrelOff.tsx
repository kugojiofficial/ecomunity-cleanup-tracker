/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarrelOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarrelOffIcon(props: BarrelOffIconProps) {
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
          "M8 4h8.722a2 2 0 011.841 1.22C19.521 7.48 20 9.74 20 12a16.348 16.348 0 01-.407 3.609m-.964 3.013l-.066.158A2 2 0 0116.722 20H7.278a2 2 0 01-1.841-1.22C4.479 16.52 4 14.26 4 12c0-2.21.458-4.42 1.374-6.63"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 4c.585 2.337.913 4.674.985 7.01m-.114 3.86A33.415 33.415 0 0114 20M10 4a34.42 34.42 0 00-.366 1.632m-.506 3.501C9.043 10.086 9 11.043 9 12c0 2.667.333 5.333 1 8m-5.5-4H16m3.5-8H12M8 8H4.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarrelOffIcon;
/* prettier-ignore-end */
