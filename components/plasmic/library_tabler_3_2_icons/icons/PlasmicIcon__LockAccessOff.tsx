/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockAccessOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockAccessOffIcon(props: LockAccessOffIconProps) {
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
          "M4 8V6c0-.554.225-1.055.588-1.417M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2c.55 0 1.05-.222 1.41-.582M15 11a1 1 0 011 1m-.29 3.704A.998.998 0 0115 16H9a1 1 0 01-1-1v-3a1 1 0 011-1h2m-1 0v-1m1.182-2.826A2 2 0 0114 9v1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LockAccessOffIcon;
/* prettier-ignore-end */
