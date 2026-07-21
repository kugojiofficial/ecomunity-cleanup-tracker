/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleDotFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleDotFilledIcon(props: CircleDotFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM12 10a2 2 0 00-1.977 1.697l-.018.154L10 12l.005.15A2 2 0 1012 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleDotFilledIcon;
/* prettier-ignore-end */
