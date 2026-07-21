/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldUpIcon(props: WorldUpIconProps) {
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
          "M20.985 12.52a9 9 0 10-8.451 8.463M3.6 9h16.8M3.6 15h10.9m-3-12a17 17 0 000 18m1-18a16.996 16.996 0 012.391 11.512M19 22v-6m3 3l-3-3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldUpIcon;
/* prettier-ignore-end */
