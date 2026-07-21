/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BathFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BathFilledIcon(props: BathFilledIconProps) {
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
          "M11 2a1 1 0 01.993.883L12 3v2.25a1 1 0 01-1.993.117L10 5.25V4H8a1 1 0 00-.993.883L7 5v6h13a2 2 0 011.995 1.85L22 13v3c0 1.475-.638 2.8-1.654 3.715l.486.73a1 1 0 01-1.594 1.203l-.07-.093-.55-.823a4.979 4.979 0 01-1.337.26L17 21H7c-.55 0-1.098-.09-1.619-.268l-.549.823a1 1 0 01-1.723-1.009l.059-.1.486-.73a4.987 4.987 0 01-1.647-3.457L2 16v-3a2 2 0 011.85-1.995L4 11h1V5a3 3 0 012.824-2.995L8 2h3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BathFilledIcon;
/* prettier-ignore-end */
