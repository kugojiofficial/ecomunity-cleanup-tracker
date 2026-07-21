/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GeometryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GeometryIcon(props: GeometryIconProps) {
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
          "M7 21l4-12m2 0l1.48 4.439m.949 2.847L17 21M10 7a2 2 0 104 0 2 2 0 00-4 0zm-6 5c1.526 2.955 4.588 5 8 5 3.41 0 6.473-2.048 8-5m-8-7V3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GeometryIcon;
/* prettier-ignore-end */
