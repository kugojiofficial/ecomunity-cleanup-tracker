/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutAlignBottomFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutAlignBottomFilledIcon(
  props: LayoutAlignBottomFilledIconProps
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
          "M20 19a1 1 0 010 2H4a1 1 0 010-2h16zM13 3a3 3 0 013 3v8a3 3 0 01-3 3h-2a3 3 0 01-3-3V6a3 3 0 013-3h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutAlignBottomFilledIcon;
/* prettier-ignore-end */
