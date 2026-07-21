/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GalaxyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GalaxyIcon(props: GalaxyIconProps) {
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
          "M12 3c-1.333 1-2 2.5-2 4.5 0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2-.667 3.5-2 4.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.794 16.5c-.2-1.655-1.165-2.982-2.897-3.982C14.3 11.018 12 12 12 12s-2.299.982-4.897-.518c-1.732-1-2.698-2.327-2.897-3.982"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.794 7.5c-1.532-.655-3.165-.482-4.897.518C12.3 9.518 12 12 12 12s-.299 2.482-2.897 3.982c-1.732 1-3.365 1.173-4.897.518"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GalaxyIcon;
/* prettier-ignore-end */
