/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutDashboardFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutDashboardFilledIcon(
  props: LayoutDashboardFilledIconProps
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
          "M9 3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4zm0 12a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h4zm10-4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6a2 2 0 012-2h4zm0-8a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutDashboardFilledIcon;
/* prettier-ignore-end */
