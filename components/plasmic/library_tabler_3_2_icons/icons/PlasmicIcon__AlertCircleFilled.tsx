/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertCircleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlertCircleFilledIcon(props: AlertCircleFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10a10 10 0 01-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2zm.01 13l-.127.007a1 1 0 000 1.986L12 17l.127-.007a1 1 0 000-1.986L12.01 15zM12 7a1 1 0 00-.993.883L11 8v4l.007.117a1 1 0 001.986 0L13 12V8l-.007-.117A1 1 0 0012 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlertCircleFilledIcon;
/* prettier-ignore-end */
