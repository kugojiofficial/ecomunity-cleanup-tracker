/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArtboardFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArtboardFilledIcon(props: ArtboardFilledIconProps) {
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
          "M15 7H9a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2zM4 7a1 1 0 01.117 1.993L4 9H3a1 1 0 01-.117-1.993L3 7h1zm0 8a1 1 0 01.117 1.993L4 17H3a1 1 0 01-.117-1.993L3 15h1zM8 2a1 1 0 01.993.883L9 3v1a1 1 0 01-1.993.117L7 4V3a1 1 0 011-1zm8 0a1 1 0 01.993.883L17 3v1a1 1 0 01-1.993.117L15 4V3a1 1 0 011-1zm5 5a1 1 0 01.117 1.993L21 9h-1a1 1 0 01-.117-1.993L20 7h1zm0 8a1 1 0 01.117 1.993L21 17h-1a1 1 0 01-.117-1.993L20 15h1zM8 19a1 1 0 01.993.883L9 20v1a1 1 0 01-1.993.117L7 21v-1a1 1 0 011-1zm8 0a1 1 0 01.993.883L17 20v1a1 1 0 01-1.993.117L15 21v-1a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArtboardFilledIcon;
/* prettier-ignore-end */
