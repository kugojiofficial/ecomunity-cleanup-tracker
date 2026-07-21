/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TableFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TableFilledIcon(props: TableFilledIconProps) {
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
          "M4 11h4a1 1 0 011 1v8a1 1 0 01-1 1H6a3 3 0 01-2.995-2.824L3 18v-6a1 1 0 011-1zm17 1v6a3 3 0 01-2.824 2.995L18 21h-6a1 1 0 01-1-1v-8a1 1 0 011-1h8a1 1 0 011 1zm-3-9a3 3 0 012.995 2.824L21 6v2a1 1 0 01-1 1h-8a1 1 0 01-1-1V4a1 1 0 011-1h6zM9 4v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6a3 3 0 012.824-2.995L6 3h2a1 1 0 011 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TableFilledIcon;
/* prettier-ignore-end */
