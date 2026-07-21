/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinimizeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinimizeIcon(props: MinimizeIconProps) {
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
          "M15 19v-2a2 2 0 012-2h2M15 5v2a2 2 0 002 2h2M5 15h2a2 2 0 012 2v2M5 9h2a2 2 0 002-2V5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MinimizeIcon;
/* prettier-ignore-end */
