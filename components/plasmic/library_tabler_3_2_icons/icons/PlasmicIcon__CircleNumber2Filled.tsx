/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber2FilledIcon(props: CircleNumber2FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 5h-3l-.117.007a1 1 0 000 1.986L10 9h3v2h-2l-.15.005a2 2 0 00-1.844 1.838L9 13v2l.005.15a2 2 0 001.838 1.844L11 17h3l.117-.007a1 1 0 000-1.986L14 15h-3v-2h2l.15-.005a2 2 0 001.844-1.838L15 11V9l-.005-.15a2 2 0 00-1.838-1.844L13 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber2FilledIcon;
/* prettier-ignore-end */
