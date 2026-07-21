/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindOffIcon(props: WindOffIconProps) {
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
          "M5 8h3m4 0h1.5a2.5 2.5 0 10-2.34-3.24M3 12h9m4 0h2.5a2.5 2.5 0 011.801 4.282M4 16h5.5a2.5 2.5 0 11-2.34 3.24M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WindOffIcon;
/* prettier-ignore-end */
