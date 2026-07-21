/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cone2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cone2FilledIcon(props: Cone2FilledIconProps) {
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
          "M12 1c5.52 0 10 1.494 10 4.002v.5a1 1 0 01-.121.477L13.74 20.985a2 2 0 01-3.489-.016l-8.13-14.99A1 1 0 012 5.504v-.5C2 2.495 6.48 1 12 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Cone2FilledIcon;
/* prettier-ignore-end */
