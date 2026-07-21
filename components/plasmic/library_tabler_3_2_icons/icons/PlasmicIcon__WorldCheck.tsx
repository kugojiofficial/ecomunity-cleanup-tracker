/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldCheckIcon(props: WorldCheckIconProps) {
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
          "M20.946 12.99a9 9 0 10-9.46 7.995M3.6 9h16.8M3.6 15h13.9m-6-12a17 17 0 000 18m1-18a16.997 16.997 0 012.311 12.001M15 19l2 2 4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldCheckIcon;
/* prettier-ignore-end */
