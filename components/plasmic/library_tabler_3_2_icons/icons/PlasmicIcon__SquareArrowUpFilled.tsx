/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareArrowUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareArrowUpFilledIcon(props: SquareArrowUpFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5l-.09.004-.058.007-.118.025-.105.035-.113.054-.111.071c-.04.03-.077.062-.112.097l-4 4-.083.094a1 1 0 00.083 1.32l.094.083a1 1 0 001.32-.083L11 10.415V16l.007.117A1 1 0 0013 16v-5.585l2.293 2.292.094.083a1 1 0 001.32-1.497l-4-4-.082-.073-.104-.074-.098-.052-.11-.044-.112-.03-.126-.017L12 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareArrowUpFilledIcon;
/* prettier-ignore-end */
