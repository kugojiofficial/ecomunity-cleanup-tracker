/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeIcon(props: ShapeIconProps) {
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
          "M3 5a2 2 0 104 0 2 2 0 00-4 0zm14 0a2 2 0 104 0 2 2 0 00-4 0zM3 19a2 2 0 104 0 2 2 0 00-4 0zm14 0a2 2 0 104 0 2 2 0 00-4 0zM5 7v10M7 5h10M7 19h10m2-12v10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
