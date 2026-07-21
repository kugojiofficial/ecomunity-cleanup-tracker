/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlenderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlenderIcon(props: BlenderIconProps) {
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
          "M9 10H6a1 1 0 01-1-1V5a1 1 0 011-1h10.802a1 1 0 01.984 1.179L16 15M8 4l2 11m1 0h4a3 3 0 013 3v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a3 3 0 013-3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 4V3h2v1m-1 14v.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BlenderIcon;
/* prettier-ignore-end */
