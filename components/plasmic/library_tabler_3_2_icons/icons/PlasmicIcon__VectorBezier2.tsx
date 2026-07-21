/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorBezier2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorBezier2Icon(props: VectorBezier2IconProps) {
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
          "M3 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm14 14a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zM7 5h7m-4 14h7m-9 0a1 1 0 102 0 1 1 0 00-2 0zm6-14a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 5.5c.657 0 1.307.168 1.913.495a5.142 5.142 0 011.623 1.409c.464.603.832 1.32 1.083 2.109.252.788.381 1.633.381 2.487 0 1.724.527 3.377 1.464 4.596.938 1.22 2.21 1.904 3.536 1.904"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VectorBezier2Icon;
/* prettier-ignore-end */
