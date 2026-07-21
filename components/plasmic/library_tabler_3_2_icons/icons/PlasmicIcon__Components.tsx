/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComponentsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComponentsIcon(props: ComponentsIconProps) {
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
          "M3 12l3 3 3-3-3-3-3 3zm12 0l3 3 3-3-3-3-3 3zM9 6l3 3 3-3-3-3-3 3zm0 12l3 3 3-3-3-3-3 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ComponentsIcon;
/* prettier-ignore-end */
