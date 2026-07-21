/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleXFilledIcon(props: CircleXFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-6.489 5.8a1 1 0 00-1.218 1.567L10.585 12l-1.292 1.293-.083.094a1 1 0 001.497 1.32L12 13.415l1.293 1.292.094.083a1 1 0 001.32-1.497L13.415 12l1.292-1.293.083-.094a1 1 0 00-1.497-1.32L12 10.585l-1.293-1.292-.094-.083-.102-.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleXFilledIcon;
/* prettier-ignore-end */
