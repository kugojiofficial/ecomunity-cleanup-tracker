/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleCheckFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleCheckFilledIcon(props: CircleCheckFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-1.293 5.953a1 1 0 00-1.32-.083l-.094.083L11 12.585l-1.293-1.292-.094-.083a1 1 0 00-1.403 1.403l.083.094 2 2 .094.083a1 1 0 001.226 0l.094-.083 4-4 .083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleCheckFilledIcon;
/* prettier-ignore-end */
