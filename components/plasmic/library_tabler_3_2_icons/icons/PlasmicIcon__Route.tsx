/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RouteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RouteIcon(props: RouteIconProps) {
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
          "M3 19a2 2 0 104 0 2 2 0 00-4 0zM19 7a2 2 0 100-4 2 2 0 000 4zm-8 12h5.5a3.5 3.5 0 100-7h-8a3.5 3.5 0 110-7H13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RouteIcon;
/* prettier-ignore-end */
