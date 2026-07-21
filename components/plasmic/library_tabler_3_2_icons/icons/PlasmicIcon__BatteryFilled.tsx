/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatteryFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatteryFilledIcon(props: BatteryFilledIconProps) {
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
          "M17 6a3 3 0 012.995 2.824L20 9v.086l.052.019a1.5 1.5 0 01.941 1.25L21 10.5v3a1.5 1.5 0 01-.948 1.395l-.052.018V15a3 3 0 01-2.824 2.995L17 18H6a3 3 0 01-2.995-2.824L3 15V9a3 3 0 012.824-2.995L6 6h11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BatteryFilledIcon;
/* prettier-ignore-end */
