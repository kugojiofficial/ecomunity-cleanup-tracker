/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HttpHeadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HttpHeadIcon(props: HttpHeadIconProps) {
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
          "M3 16V8m4 0v8m-4-4h4m7-4h-4v8h4m-4-4h2.5m4.5 4v-6a2 2 0 114 0v6m-4-3h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HttpHeadIcon;
/* prettier-ignore-end */
