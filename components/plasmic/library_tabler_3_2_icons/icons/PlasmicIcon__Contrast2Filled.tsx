/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Contrast2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Contrast2FilledIcon(props: Contrast2FilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm0 2H5a1 1 0 00-1 1v14a1 1 0 00.769.973c3.499-.347 7.082-4.127 7.226-7.747L12 12c0-3.687 3.66-7.619 7.232-7.974A1 1 0 0019 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Contrast2FilledIcon;
/* prettier-ignore-end */
