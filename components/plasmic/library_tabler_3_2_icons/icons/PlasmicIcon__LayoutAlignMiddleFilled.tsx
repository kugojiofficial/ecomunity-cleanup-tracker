/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutAlignMiddleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutAlignMiddleFilledIcon(
  props: LayoutAlignMiddleFilledIconProps
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
          "M13 5a3 3 0 013 3v3h4a1 1 0 010 2h-4v3a3 3 0 01-3 3h-2a3 3 0 01-3-3v-3H4a1 1 0 010-2h4V8a3 3 0 013-3h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutAlignMiddleFilledIcon;
/* prettier-ignore-end */
