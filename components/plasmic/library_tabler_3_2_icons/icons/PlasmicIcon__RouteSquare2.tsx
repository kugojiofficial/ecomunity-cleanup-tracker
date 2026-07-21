/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RouteSquare2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RouteSquare2Icon(props: RouteSquare2IconProps) {
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
        d={"M14 5a2 2 0 00-2 2v10a2 2 0 01-2 2m-7-2h4v4H3v-4zM17 3h4v4h-4V3z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RouteSquare2Icon;
/* prettier-ignore-end */
