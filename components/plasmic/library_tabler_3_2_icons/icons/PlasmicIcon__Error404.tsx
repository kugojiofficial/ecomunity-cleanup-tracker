/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Error404IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Error404Icon(props: Error404IconProps) {
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
          "M3 7v4a1 1 0 001 1h3m0-5v10m3-9v8a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1h-2a1 1 0 00-1 1zm7-1v4a1 1 0 001 1h3m0-5v10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Error404Icon;
/* prettier-ignore-end */
