/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeAdFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeAdFilledIcon(props: BadgeAdFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-4 4h-1a1 1 0 00-1 1v6a1 1 0 001 1h1a3 3 0 003-3v-2a3 3 0 00-3-3zM8.5 8A2.5 2.5 0 006 10.5V15a1 1 0 102 0v-1h1v1a1 1 0 00.883.993L10 16a1 1 0 001-1v-4.5A2.5 2.5 0 008.5 8zm6.5 2a1 1 0 011 1v2a1 1 0 01-.883.993L15 14v-4zm-6.5 0a.5.5 0 01.5.5V12H8v-1.5a.5.5 0 01.41-.492L8.5 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeAdFilledIcon;
/* prettier-ignore-end */
