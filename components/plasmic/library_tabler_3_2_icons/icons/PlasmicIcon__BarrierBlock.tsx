/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarrierBlockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarrierBlockIcon(props: BarrierBlockIconProps) {
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
          "M4 8a1 1 0 011-1h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm3 8v4m.5-4l9-9m-3 9L20 9.5m-16 4L10.5 7m6.5 9v4M5 20h4m6 0h4M17 7V5M7 7V5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarrierBlockIcon;
/* prettier-ignore-end */
