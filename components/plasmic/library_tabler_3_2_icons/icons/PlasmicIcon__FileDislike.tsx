/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileDislikeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileDislikeIcon(props: FileDislikeIconProps) {
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
          "M3 15a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm3 0a1 1 0 011-1h3.756a1 1 0 01.958.713l1.2 3c.09.303.133.63-.056.884-.188.254-.542.403-.858.403h-2v2.467a1.1 1.1 0 01-2.015.61L6 19v-4zm8-12v4a1 1 0 001 1h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 11V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2h-2.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileDislikeIcon;
/* prettier-ignore-end */
