/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GrainIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GrainIcon(props: GrainIconProps) {
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
          "M3.5 9.5a1 1 0 102 0 1 1 0 00-2 0zm5-5a1 1 0 102 0 1 1 0 00-2 0zm0 10a1 1 0 102 0 1 1 0 00-2 0zm-5 5a1 1 0 102 0 1 1 0 00-2 0zm10-10a1 1 0 102 0 1 1 0 00-2 0zm5-5a1 1 0 102 0 1 1 0 00-2 0zm-5 15a1 1 0 102 0 1 1 0 00-2 0zm5-5a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GrainIcon;
/* prettier-ignore-end */
