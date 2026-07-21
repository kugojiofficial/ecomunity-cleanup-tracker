/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorTriangleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorTriangleOffIcon(props: VectorTriangleOffIconProps) {
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
          "M10 6V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-1M3 18a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm17.705 2.709A1 1 0 0120 21h-2a1 1 0 01-1-1v-2c0-.28.115-.532.3-.714M6.5 17.1l3.749-6.823m2.909-1.08L12.5 8M7 19h10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VectorTriangleOffIcon;
/* prettier-ignore-end */
