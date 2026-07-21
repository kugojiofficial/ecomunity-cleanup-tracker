/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircuitInductorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircuitInductorIcon(props: CircuitInductorIconProps) {
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
          "M2 14h3v-2a2 2 0 014 0v2-1.5a2.5 2.5 0 015 0m0 0V14m0-1.5a2.5 2.5 0 015 0V14h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CircuitInductorIcon;
/* prettier-ignore-end */
