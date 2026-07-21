/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigUpFilledIcon(props: ArrowBigUpFilledIconProps) {
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
          "M10.586 3L4 9.586a2 2 0 00-.434 2.18l.068.145A2 2 0 005.414 13H8v7a2 2 0 002 2h4l.15-.005A2 2 0 0016 20l-.001-7h2.587A2 2 0 0020 9.586L13.414 3a2 2 0 00-2.828 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigUpFilledIcon;
/* prettier-ignore-end */
