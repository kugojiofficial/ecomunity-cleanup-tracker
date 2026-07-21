/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JpgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JpgIcon(props: JpgIconProps) {
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
          "M21 8h-2a2 2 0 00-2 2v4a2 2 0 002 2h2v-4h-1m-10 4V8h2a2 2 0 010 4h-2M3 8h4v6a2 2 0 01-2 2H3.5a.5.5 0 01-.5-.5V15"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default JpgIcon;
/* prettier-ignore-end */
