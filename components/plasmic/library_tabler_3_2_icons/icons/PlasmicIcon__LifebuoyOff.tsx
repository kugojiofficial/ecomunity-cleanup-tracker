/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LifebuoyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LifebuoyOffIcon(props: LifebuoyOffIconProps) {
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
        d={"M9.171 9.172a4 4 0 005.65 5.663M16 12a4 4 0 00-4-4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.64 5.632a9 9 0 1012.73 12.725m1.667-2.301A9 9 0 007.96 3.956M15 15l3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LifebuoyOffIcon;
/* prettier-ignore-end */
