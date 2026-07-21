/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layout2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layout2FilledIcon(props: Layout2FilledIconProps) {
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
          "M8 3a3 3 0 013 3v1a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h2zm0 9a3 3 0 013 3v3a3 3 0 01-3 3H6a3 3 0 01-3-3v-3a3 3 0 013-3h2zm10-9a3 3 0 013 3v3a3 3 0 01-3 3h-2a3 3 0 01-3-3V6a3 3 0 013-3h2zm0 11a3 3 0 013 3v1a3 3 0 01-3 3h-2a3 3 0 01-3-3v-1a3 3 0 013-3h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layout2FilledIcon;
/* prettier-ignore-end */
