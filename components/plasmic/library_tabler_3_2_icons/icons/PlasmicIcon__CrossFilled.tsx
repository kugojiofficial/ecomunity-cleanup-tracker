/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrossFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrossFilledIcon(props: CrossFilledIconProps) {
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
          "M10 2l-.117.007A1 1 0 009 3v4H5a1 1 0 00-1 1v4l.007.117A1 1 0 005 13h4v8a1 1 0 001 1h4l.117-.007A1 1 0 0015 21v-8h4a1 1 0 001-1V8l-.007-.117A1 1 0 0019 7h-4V3a1 1 0 00-1-1h-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CrossFilledIcon;
/* prettier-ignore-end */
