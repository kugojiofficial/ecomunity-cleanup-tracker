/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlignBoxTopCenterFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlignBoxTopCenterFilledIcon(
  props: AlignBoxTopCenterFilledIconProps
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM12 5a1 1 0 00-1 1v6l.007.117A1 1 0 0013 12V6l-.007-.117A1 1 0 0012 5zm3 0a1 1 0 00-1 1v4l.007.117A1 1 0 0016 10V6l-.007-.117A1 1 0 0015 5zM9 5a1 1 0 00-1 1v2l.007.117A1 1 0 0010 8V6l-.007-.117A1 1 0 009 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlignBoxTopCenterFilledIcon;
/* prettier-ignore-end */
