/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlugIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlugIcon(props: PlugIconProps) {
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
          "M9.785 6L18 14.215l-2.054 2.054a5.81 5.81 0 11-8.215-8.215L9.785 6zM4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlugIcon;
/* prettier-ignore-end */
