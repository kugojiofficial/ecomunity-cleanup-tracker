/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircuitChangeoverIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircuitChangeoverIcon(props: CircuitChangeoverIconProps) {
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
          "M2 12h2m16-5h2M4 12a2 2 0 104 0 2 2 0 00-4 0zm12-5a2 2 0 104 0 2 2 0 00-4 0zm4 10h2m-6 0a2 2 0 104 0 2 2 0 00-4 0zm-8.5-6.5L16 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CircuitChangeoverIcon;
/* prettier-ignore-end */
