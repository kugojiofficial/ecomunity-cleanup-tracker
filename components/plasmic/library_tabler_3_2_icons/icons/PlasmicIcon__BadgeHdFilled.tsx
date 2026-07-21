/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeHdFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeHdFilledIcon(props: BadgeHdFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-4 4h-1a1 1 0 00-1 1v6a1 1 0 001 1h1a3 3 0 003-3v-2a3 3 0 00-3-3zm-5 0a1 1 0 00-1 1v2H8V9a1 1 0 00-.883-.993L7 8a1 1 0 00-1 1v6a1 1 0 102 0v-2h1v2a1 1 0 00.883.993L10 16a1 1 0 001-1V9a1 1 0 00-1-1zm5 2a1 1 0 011 1v2a1 1 0 01-.883.993L15 14v-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeHdFilledIcon;
/* prettier-ignore-end */
