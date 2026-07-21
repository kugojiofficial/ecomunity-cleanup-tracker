/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldDownIcon(props: WorldDownIconProps) {
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
          "M20.986 12.509a9 9 0 10-8.455 8.476M3.6 9h16.8M3.6 15h10.9m-3-12a17 17 0 000 18m1-18c2.313 3.706 3.07 7.857 2.27 12M19 16v6m3-3l-3 3-3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldDownIcon;
/* prettier-ignore-end */
