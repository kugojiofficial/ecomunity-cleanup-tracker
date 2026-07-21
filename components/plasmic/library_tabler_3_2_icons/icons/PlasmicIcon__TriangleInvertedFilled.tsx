/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleInvertedFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriangleInvertedFilledIcon(
  props: TriangleInvertedFilledIconProps
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
          "M20.118 3H3.893A2.914 2.914 0 001.39 7.371L9.506 20.92a2.916 2.916 0 004.987.005l8.11-13.539A2.914 2.914 0 0020.118 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TriangleInvertedFilledIcon;
/* prettier-ignore-end */
