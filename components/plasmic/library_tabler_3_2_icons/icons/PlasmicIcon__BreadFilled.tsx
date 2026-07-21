/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BreadFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BreadFilledIcon(props: BreadFilledIconProps) {
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
          "M18 3a4 4 0 013.109 6.516l-.11.126L21 18a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-3-3V9.644l-.116-.136a4 4 0 01-.728-3.616l.067-.21c.532-1.525 1.93-2.58 3.601-2.677l12.079.001L18 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BreadFilledIcon;
/* prettier-ignore-end */
