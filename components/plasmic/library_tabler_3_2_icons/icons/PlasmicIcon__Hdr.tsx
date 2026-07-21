/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HdrIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HdrIcon(props: HdrIconProps) {
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
          "M3 16V8m4 0v8m-4-4h4m3-4v8h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2zm7 4h2a2 2 0 000-4h-2v8m4 0l-3-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HdrIcon;
/* prettier-ignore-end */
