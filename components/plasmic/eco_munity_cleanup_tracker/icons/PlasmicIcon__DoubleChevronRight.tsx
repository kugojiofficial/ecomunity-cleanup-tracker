/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoubleChevronRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoubleChevronRightIcon(props: DoubleChevronRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      x={"0"}
      y={"0"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"m3 23-3-3 8-8-8-8 3-3 11 11zm10 0-3-3 8-8-8-8 3-3 11 11z"}
      ></path>
    </svg>
  );
}

export default DoubleChevronRightIcon;
/* prettier-ignore-end */
