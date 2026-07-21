/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NumberIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NumberIcon(props: NumberIconProps) {
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
          "M4 17V7l7 10V7m4 10h5m-5-7c0 .796.263 1.559.732 2.121.47.563 1.105.879 1.768.879s1.299-.316 1.768-.879C19.737 11.56 20 10.796 20 10s-.263-1.559-.732-2.121C18.798 7.316 18.163 7 17.5 7s-1.299.316-1.768.879C15.263 8.44 15 9.204 15 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NumberIcon;
/* prettier-ignore-end */
