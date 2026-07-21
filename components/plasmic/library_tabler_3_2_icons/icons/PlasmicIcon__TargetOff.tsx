/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TargetOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TargetOffIcon(props: TargetOffIconProps) {
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
          "M11.286 11.3a1 1 0 101.41 1.419M8.44 8.49a5 5 0 007.098 7.044m1.377-2.611a5 5 0 00-5.846-5.836"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.649 5.623a9 9 0 1012.698 12.758m1.683-2.313A9 9 0 007.954 3.958M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TargetOffIcon;
/* prettier-ignore-end */
