/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingBridge2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingBridge2Icon(props: BuildingBridge2IconProps) {
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
          "M6 7h12a2 2 0 012 2v9a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a4 4 0 10-8 0v2a1 1 0 01-1 1H5a1 1 0 01-1-1V9a2 2 0 012-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingBridge2Icon;
/* prettier-ignore-end */
