/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletHalfFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletHalfFilledIcon(props: DropletHalfFilledIconProps) {
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
          "M12 2l.07.003a2.41 2.41 0 011.825.907l.108.148 4.92 7.306c1.952 3.267 1.191 7.42-1.796 9.836-2.968 2.402-7.285 2.402-10.254 0-2.917-2.36-3.711-6.376-1.901-9.65l.134-.232 4.893-7.26c.185-.275.426-.509.709-.686a2.426 2.426 0 011.066-.36L12 2zm-1 3.149l-4.206 6.24c-1.44 2.41-.88 5.463 1.337 7.257A6.1 6.1 0 0011 19.922V5.149z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DropletHalfFilledIcon;
/* prettier-ignore-end */
