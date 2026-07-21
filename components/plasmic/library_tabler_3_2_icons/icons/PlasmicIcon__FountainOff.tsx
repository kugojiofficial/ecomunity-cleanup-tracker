/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FountainOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FountainOffIcon(props: FountainOffIconProps) {
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
          "M9 16v-5a2 2 0 00-4 0m10 5v-1m0-4a2 2 0 114 0m-7 5v-4m0-4V6a3 3 0 016 0M7.451 3.43A3 3 0 0112 6m8 10h1v1m-.871 3.114A2.99 2.99 0 0118 21H6a3 3 0 01-3-3v-2h13M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FountainOffIcon;
/* prettier-ignore-end */
