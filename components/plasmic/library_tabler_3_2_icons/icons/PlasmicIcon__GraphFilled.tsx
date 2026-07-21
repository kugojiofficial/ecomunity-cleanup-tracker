/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GraphFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GraphFilledIcon(props: GraphFilledIconProps) {
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
          "M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm-2.293 6.293a1 1 0 00-1.414 0L12 11.585l-1.293-1.292a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414l.094.083a1 1 0 001.32-.083L10 12.415l1.293 1.292.094.083a1 1 0 001.32-.083L15 11.415l1.293 1.292a1 1 0 001.414-1.414l-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GraphFilledIcon;
/* prettier-ignore-end */
