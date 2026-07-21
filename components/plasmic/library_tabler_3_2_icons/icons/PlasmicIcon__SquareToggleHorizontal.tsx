/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareToggleHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareToggleHorizontalIcon(
  props: SquareToggleHorizontalIconProps
) {
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
          "M22 12H2m2 2V6a2 2 0 012-2h12a2 2 0 012 2v8m-2 6a2 2 0 002-2M4 18a2 2 0 002 2m8 0h-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SquareToggleHorizontalIcon;
/* prettier-ignore-end */
