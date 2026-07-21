/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnetFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnetFilledIcon(props: MagnetFilledIconProps) {
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
          "M21 9v4a9 9 0 01-18 0V9h7v4a2 2 0 004 0V9h7zm-3-7a3 3 0 013 3v2h-7V5a3 3 0 013-3h1zM7 2a3 3 0 013 3v2H3V5a3 3 0 013-3h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MagnetFilledIcon;
/* prettier-ignore-end */
