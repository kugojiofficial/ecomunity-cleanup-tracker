/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RouteSquareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RouteSquareIcon(props: RouteSquareIconProps) {
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
          "M3 17h4v4H3v-4zM17 3h4v4h-4V3zm-6 16h5.5a3.5 3.5 0 100-7h-8a3.5 3.5 0 110-7H13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RouteSquareIcon;
/* prettier-ignore-end */
