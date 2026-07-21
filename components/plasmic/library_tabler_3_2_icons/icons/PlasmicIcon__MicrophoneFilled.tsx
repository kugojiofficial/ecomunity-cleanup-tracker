/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MicrophoneFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MicrophoneFilledIcon(props: MicrophoneFilledIconProps) {
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
          "M19 9a1 1 0 011 1 8 8 0 01-6.999 7.938L13 20h3a1 1 0 010 2H8a1 1 0 010-2h3v-2.062A8 8 0 014 10a1 1 0 012 0 6 6 0 1012 0 1 1 0 011-1zm-7-8a4 4 0 014 4v5a4 4 0 11-8 0V5a4 4 0 014-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MicrophoneFilledIcon;
/* prettier-ignore-end */
