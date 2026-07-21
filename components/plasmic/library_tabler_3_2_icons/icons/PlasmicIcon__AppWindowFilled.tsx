/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppWindowFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppWindowFilledIcon(props: AppWindowFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zM6.01 7l-.127.007A1 1 0 006 9l.127-.007A1 1 0 006.01 7zm3 0l-.127.007A1 1 0 009 9l.127-.007A1 1 0 009.01 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppWindowFilledIcon;
/* prettier-ignore-end */
