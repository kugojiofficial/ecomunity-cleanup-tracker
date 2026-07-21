/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhysotherapistIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhysotherapistIcon(props: PhysotherapistIconProps) {
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
          "M9 15l-1-3 4-2 4 1h3.5M3 19a1 1 0 102 0 1 1 0 00-2 0zm8-13a1 1 0 102 0 1 1 0 00-2 0zm1 11v-7M8 20h7l1-4 4-2m-2 6h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhysotherapistIcon;
/* prettier-ignore-end */
