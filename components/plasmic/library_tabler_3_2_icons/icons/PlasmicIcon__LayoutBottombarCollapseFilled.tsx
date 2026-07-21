/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutBottombarCollapseFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function LayoutBottombarCollapseFilledIcon(
  props: LayoutBottombarCollapseFilledIconProps
) {
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
          "M18 3a3 3 0 012.995 2.824L21 6v12a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18V6a3 3 0 012.824-2.995L6 3h12zm0 2H6a1 1 0 00-.993.883L5 6v9h14V6a1 1 0 00-.883-.993L18 5zm-7.387 3.21l.094.083L12 9.585l1.293-1.292a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-2 2a1 1 0 01-1.32.083l-.094-.083-2-2a1 1 0 011.32-1.497z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutBottombarCollapseFilledIcon;
/* prettier-ignore-end */
