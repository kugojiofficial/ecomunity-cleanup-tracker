/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeadphonesFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeadphonesFilledIcon(props: HeadphonesFilledIconProps) {
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
          "M21 18a3 3 0 01-2.824 2.995L18 21h-1a3 3 0 01-2.995-2.824L14 18v-3a3 3 0 012.824-2.995L17 12h1c.351 0 .688.06 1 .171V12a7 7 0 00-13.996-.24L5 12v.17c.25-.088.516-.144.791-.163L6 12h1a3 3 0 012.995 2.824L10 15v3a3 3 0 01-2.824 2.995L7 21H6a3 3 0 01-2.995-2.824L3 18v-6a9 9 0 0117.996-.265L21 12v6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeadphonesFilledIcon;
/* prettier-ignore-end */
