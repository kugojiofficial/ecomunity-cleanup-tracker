/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeWcFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeWcFilledIcon(props: BadgeWcFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-7.534 4a1 1 0 00-.963.917l-.204 2.445-.405-.81-.063-.11a1 1 0 00-1.725.11l-.406.81-.203-2.445A1 1 0 006.534 8l-.117.003a1 1 0 00-.914 1.08l.5 6 .016.117c.175.91 1.441 1.115 1.875.247L9 13.236l1.106 2.211c.452.904 1.807.643 1.89-.364l.5-6a1 1 0 00-.913-1.08L11.466 8zM15.5 8a2.5 2.5 0 00-2.5 2.5v3a2.5 2.5 0 005 0 1 1 0 00-2 0 .5.5 0 01-1 0v-3a.5.5 0 011 0 1 1 0 002 0A2.5 2.5 0 0015.5 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeWcFilledIcon;
/* prettier-ignore-end */
