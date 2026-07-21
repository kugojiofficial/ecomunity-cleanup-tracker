/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlassFullFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlassFullFilledIcon(props: GlassFullFilledIconProps) {
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
          "M5.004 10.229l-.003-.186.001-.113.008-.071 1-7a1 1 0 01.877-.853L7 2h10a1 1 0 01.968.747l.022.112 1.006 7.05L19 10c0 3.226-2.56 5.564-6 5.945V20h3a1 1 0 01.117 1.993L16 22H8a1 1 0 01-.117-1.993L8 20h3v-4.055c-3.358-.371-5.878-2.609-5.996-5.716zM16.133 4H7.866l-.607 4.258a6.001 6.001 0 015.125.787l.216.155a4 4 0 004.32.31L16.133 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlassFullFilledIcon;
/* prettier-ignore-end */
