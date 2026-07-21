/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutAlignRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutAlignRightFilledIcon(
  props: LayoutAlignRightFilledIconProps
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
          "M20 3a1 1 0 011 1v16a1 1 0 01-2 0V4a1 1 0 011-1zm-6 5a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a3 3 0 013-3h8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutAlignRightFilledIcon;
/* prettier-ignore-end */
