/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudLockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudLockIcon(props: CloudLockIconProps) {
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
          "M19 18a3.5 3.5 0 100-7h-1c.397-1.768-.285-3.593-1.788-4.787-1.503-1.193-3.6-1.575-5.5-1S7.397 7.232 7 9c-2.199-.088-4.155 1.326-4.666 3.373-.512 2.047.564 4.154 2.566 5.027"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 16a1 1 0 011-1h6a1 1 0 011 1v3a1 1 0 01-1 1H9a1 1 0 01-1-1v-3zm2-1v-2a2 2 0 014 0v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudLockIcon;
/* prettier-ignore-end */
