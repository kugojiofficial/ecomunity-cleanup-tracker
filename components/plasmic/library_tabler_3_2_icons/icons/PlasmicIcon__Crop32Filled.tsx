/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Crop32FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Crop32FilledIcon(props: Crop32FilledIconProps) {
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
        d={"M18 6a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V9a3 3 0 013-3h12z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Crop32FilledIcon;
/* prettier-ignore-end */
