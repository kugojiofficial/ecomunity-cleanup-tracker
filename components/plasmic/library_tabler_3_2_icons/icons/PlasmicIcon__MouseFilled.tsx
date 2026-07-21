/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MouseFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MouseFilledIcon(props: MouseFilledIconProps) {
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
          "M14 2a5 5 0 015 5v10a5 5 0 01-5 5h-4a5 5 0 01-5-5V7a5 5 0 015-5h4zm-2 4a1 1 0 00-1 1v4l.007.117A1 1 0 0013 11V7l-.007-.117A1 1 0 0012 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MouseFilledIcon;
/* prettier-ignore-end */
