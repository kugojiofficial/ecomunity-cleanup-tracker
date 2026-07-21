/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InnerShadowBottomFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InnerShadowBottomFilledIcon(
  props: InnerShadowBottomFilledIconProps
) {
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
          "M5.144 4.72c3.92-3.695 10.093-3.625 13.927.209 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142l.215-.209zm3.32 10.816A1 1 0 107.05 16.95a7 7 0 009.9 0 1 1 0 00-1.414-1.414 5.001 5.001 0 01-7.072 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InnerShadowBottomFilledIcon;
/* prettier-ignore-end */
