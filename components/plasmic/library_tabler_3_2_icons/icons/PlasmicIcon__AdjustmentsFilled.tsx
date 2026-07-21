/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsFilledIcon(props: AdjustmentsFilledIconProps) {
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
          "M6 3a1 1 0 01.993.883L7 4v3.171a3.001 3.001 0 010 5.658V20a1 1 0 01-1.993.117L5 20v-7.17a3.002 3.002 0 01-1.995-2.654L3 10l.005-.176A3.002 3.002 0 015 7.17V4a1 1 0 011-1zm6 0a1 1 0 01.993.883L13 4v9.171a3 3 0 010 5.658V20a1 1 0 01-1.993.117L11 20v-1.17a3.002 3.002 0 01-1.995-2.654L9 16l.005-.176A3.002 3.002 0 0111 13.17V4a1 1 0 011-1zm6 0a1 1 0 01.993.883L19 4v.171a3 3 0 010 5.658V20a1 1 0 01-1.993.117L17 20V9.83a3.002 3.002 0 01-1.995-2.654L15 7l.005-.176A3.002 3.002 0 0117 4.17V4a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AdjustmentsFilledIcon;
/* prettier-ignore-end */
