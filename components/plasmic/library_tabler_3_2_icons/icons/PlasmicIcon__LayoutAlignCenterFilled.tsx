/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutAlignCenterFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutAlignCenterFilledIcon(
  props: LayoutAlignCenterFilledIconProps
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
          "M12 3a1 1 0 011 1v4h3a3 3 0 013 3v2a3 3 0 01-3 3h-3v4a1 1 0 01-2 0v-4H8a3 3 0 01-3-3v-2a3 3 0 013-3h3V4a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutAlignCenterFilledIcon;
/* prettier-ignore-end */
