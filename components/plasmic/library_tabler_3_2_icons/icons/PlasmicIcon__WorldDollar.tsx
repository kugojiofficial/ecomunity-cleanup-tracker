/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldDollarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldDollarIcon(props: WorldDollarIconProps) {
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
          "M20.876 10.51a9 9 0 10-7.839 10.43M3.6 9h16.8M3.6 15h9.9m-2-12a17 17 0 000 18m1-18a16.987 16.987 0 012.578 9.02"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M21 15h-2.5a1.5 1.5 0 100 3h1a1.5 1.5 0 110 3H17m2 0v1m0-8v1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldDollarIcon;
/* prettier-ignore-end */
