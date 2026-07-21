/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HttpConnectIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HttpConnectIcon(props: HttpConnectIconProps) {
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
          "M7 10a2 2 0 10-4 0v4a2 2 0 004 0m10 2V8l4 8V8m-9 0a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HttpConnectIcon;
/* prettier-ignore-end */
