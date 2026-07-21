/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarsOffIcon(props: StarsOffIconProps) {
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
          "M17.373 13.371l.076-.154a.392.392 0 01.702 0l.907 1.831m.367.39c.498.071 1.245.18 2.24.324a.391.391 0 01.217.665c-.326.316-.57.553-.732.712m-.611 3.405a.39.39 0 01-.567.411L17.8 19.817l-2.172 1.138a.392.392 0 01-.568-.41l.415-2.411-1.757-1.707a.39.39 0 01.217-.665l1.601-.232M6.2 19.817l-2.172 1.138a.392.392 0 01-.568-.41l.415-2.411-1.757-1.707a.389.389 0 01.217-.665l2.428-.352 1.086-2.193a.392.392 0 01.702 0l1.086 2.193 2.428.352a.391.391 0 01.217.665l-1.757 1.707.414 2.41a.39.39 0 01-.567.411L6.2 19.817zM9.557 5.556l1-.146 1.086-2.193a.392.392 0 01.702 0l1.086 2.193 2.428.352a.39.39 0 01.217.665l-1.757 1.707.414 2.41a.39.39 0 01-.014.187m-4.153-.166l-.744.39a.392.392 0 01-.568-.41l.188-1.093M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default StarsOffIcon;
/* prettier-ignore-end */
