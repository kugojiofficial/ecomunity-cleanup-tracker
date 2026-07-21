/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldPauseIcon(props: WorldPauseIconProps) {
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
          "M20.945 12.997a9 9 0 10-7.928 7.945M3.6 9h16.8M3.6 15h9.9m-2-12a17 17 0 000 18m1-18a16.992 16.992 0 012.51 10.526M17 17v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldPauseIcon;
/* prettier-ignore-end */
