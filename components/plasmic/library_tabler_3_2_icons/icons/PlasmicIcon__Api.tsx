/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApiIcon(props: ApiIconProps) {
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
          "M4 13h5m3 3V8h3a2 2 0 012 2v1a2 2 0 01-2 2h-3m8-5v8M9 16v-5.5a2.5 2.5 0 10-5 0V16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ApiIcon;
/* prettier-ignore-end */
