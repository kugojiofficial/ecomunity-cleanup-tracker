/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyStar3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyStar3Icon(props: TopologyStar3IconProps) {
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
          "M10 19a2 2 0 10-4 0 2 2 0 004 0zm8-14a2 2 0 10-4 0 2 2 0 004 0zm-8 0a2 2 0 10-4 0 2 2 0 004 0zm-4 7a2 2 0 10-4 0 2 2 0 004 0zm12 7a2 2 0 10-4 0 2 2 0 004 0zm-4-7a2 2 0 10-4 0 2 2 0 004 0zm8 0a2 2 0 10-4 0 2 2 0 004 0zM6 12h4m4 0h4m-3-5l-2 3M9 7l2 3m0 4l-2 3m4-3l2 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyStar3Icon;
/* prettier-ignore-end */
