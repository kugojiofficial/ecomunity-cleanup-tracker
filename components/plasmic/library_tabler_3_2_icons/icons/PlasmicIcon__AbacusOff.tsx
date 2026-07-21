/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AbacusOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AbacusOffIcon(props: AbacusOffIconProps) {
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
          "M5 5v16m14 0v-2m0-4V3M5 7h2m4 0h8M5 15h10m-7-2v4m3-4v4m5-1v1M14 5v4m-3-4v2M8 8v1M3 21h18M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AbacusOffIcon;
/* prettier-ignore-end */
