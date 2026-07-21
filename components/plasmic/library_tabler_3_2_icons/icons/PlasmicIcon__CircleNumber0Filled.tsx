/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber0FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber0FilledIcon(props: CircleNumber0FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5a3 3 0 00-2.995 2.824L9 10v4l.005.176a3 3 0 005.99 0L15 14v-4l-.005-.176A3 3 0 0012 7zm0 2a1 1 0 01.993.883L13 10v4l-.007.117a1 1 0 01-1.986 0L11 14v-4l.007-.117A1 1 0 0112 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber0FilledIcon;
/* prettier-ignore-end */
