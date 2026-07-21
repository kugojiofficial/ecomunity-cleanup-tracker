/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Error404OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Error404OffIcon(props: Error404OffIconProps) {
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
          "M3 7v4a1 1 0 001 1h3m0-5v10m3-7v6a1 1 0 001 1h2a1 1 0 001-1v-2m0-4V8a1 1 0 00-1-1h-2m6 0v4a1 1 0 001 1h3m0-5v10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Error404OffIcon;
/* prettier-ignore-end */
