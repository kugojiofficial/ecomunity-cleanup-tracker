/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HttpQueIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HttpQueIcon(props: HttpQueIconProps) {
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
          "M5 8a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2zm1 7l1 1m14-8h-4v8h4m-4-4h2.5M10 8v6a2 2 0 004 0V8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HttpQueIcon;
/* prettier-ignore-end */
