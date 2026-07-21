/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldStarIcon(props: WorldStarIconProps) {
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
          "M21 12a9 9 0 10-9.968 8.948M3.6 9h16.8M3.6 15H10m1.5-12a17 17 0 00-1.886 13.802M12.5 3a16.982 16.982 0 012.549 8.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.8 20.817l-2.172 1.138a.392.392 0 01-.568-.41l.415-2.411-1.757-1.707a.39.39 0 01.217-.665l2.428-.352 1.086-2.193a.392.392 0 01.702 0l1.086 2.193 2.428.352a.391.391 0 01.217.665l-1.757 1.707.414 2.41a.39.39 0 01-.567.411L17.8 20.817z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldStarIcon;
/* prettier-ignore-end */
