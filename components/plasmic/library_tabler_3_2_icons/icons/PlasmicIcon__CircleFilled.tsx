/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleFilledIcon(props: CircleFilledIconProps) {
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
        d={"M7 3.34a10 10 0 11-4.995 8.984L2 12l.005-.324A10 10 0 017 3.34z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleFilledIcon;
/* prettier-ignore-end */
