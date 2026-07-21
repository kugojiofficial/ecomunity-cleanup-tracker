/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TomlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TomlIcon(props: TomlIconProps) {
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
          "M1.499 8h3m-1.5 0v8M8.5 8A1.5 1.5 0 0110 9.5v5a1.5 1.5 0 01-3 0v-5A1.5 1.5 0 018.5 8zm4.5 8V8l2 5 2-5v8m3-8v8h2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TomlIcon;
/* prettier-ignore-end */
