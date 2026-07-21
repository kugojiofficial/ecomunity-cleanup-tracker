/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RectangleRoundedTopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RectangleRoundedTopIcon(props: RectangleRoundedTopIconProps) {
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
        d={"M9 6h6a6 6 0 016 6v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a6 6 0 016-6z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RectangleRoundedTopIcon;
/* prettier-ignore-end */
