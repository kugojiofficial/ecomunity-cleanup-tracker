/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeCcFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeCcFilledIcon(props: BadgeCcFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zM8.5 8A2.5 2.5 0 006 10.5v3a2.5 2.5 0 005 0 1 1 0 00-2 0 .5.5 0 01-1 0v-3a.5.5 0 011 0 1 1 0 102 0A2.5 2.5 0 008.5 8zm7 0a2.5 2.5 0 00-2.5 2.5v3a2.5 2.5 0 005 0 1 1 0 00-2 0 .5.5 0 01-1 0v-3a.5.5 0 011 0 1 1 0 002 0A2.5 2.5 0 0015.5 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeCcFilledIcon;
/* prettier-ignore-end */
