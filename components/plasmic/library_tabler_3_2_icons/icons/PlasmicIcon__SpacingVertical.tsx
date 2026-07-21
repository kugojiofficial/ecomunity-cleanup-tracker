/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpacingVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpacingVerticalIcon(props: SpacingVerticalIconProps) {
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
          "M4 20v-2a2 2 0 012-2h12a2 2 0 012 2v2M4 4v2a2 2 0 002 2h12a2 2 0 002-2V4m-4 8H8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SpacingVerticalIcon;
/* prettier-ignore-end */
