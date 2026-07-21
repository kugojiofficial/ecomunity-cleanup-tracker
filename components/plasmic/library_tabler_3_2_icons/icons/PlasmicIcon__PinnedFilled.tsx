/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinnedFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinnedFilledIcon(props: PinnedFilledIconProps) {
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
          "M16 3a1 1 0 01.117 1.993L16 5v4.764l1.894 3.789c.052.104.086.216.1.331L18 14v2a1 1 0 01-.883.993L17 17h-4v4a1 1 0 01-1.993.117L11 21v-4H7a1 1 0 01-.993-.883L6 16v-2a1 1 0 01.06-.34l.046-.107L8 9.762V5a1 1 0 01-.117-1.993L8 3h8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PinnedFilledIcon;
/* prettier-ignore-end */
